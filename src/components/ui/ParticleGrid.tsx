"use client";

import { useEffect, useRef } from "react";

export function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; baseX: number; baseY: number; vx: number; vy: number }[] = [];
    const spacing = 50;
    const cols = Math.ceil(window.innerWidth / spacing) + 1;
    const rows = Math.ceil(window.innerHeight / spacing) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * spacing,
          y: j * spacing,
          baseX: i * spacing,
          baseY: j * spacing,
          vx: 0,
          vy: 0,
        });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const dot of dots) {
        if (!prefersReducedMotion) {
          const dx = mouseX - dot.x;
          const dy = mouseY - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            dot.vx -= (dx / dist) * force * 0.5;
            dot.vy -= (dy / dist) * force * 0.5;
          }

          dot.vx += (dot.baseX - dot.x) * 0.05;
          dot.vy += (dot.baseY - dot.y) * 0.05;
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.x += dot.vx;
          dot.y += dot.vy;
        }

        const distFromMouse = Math.sqrt(
          (mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2
        );
        const opacity = distFromMouse < 200 ? 0.4 : 0.12;
        const size = distFromMouse < 200 ? 2 : 1.2;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
