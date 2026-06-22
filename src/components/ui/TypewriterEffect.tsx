"use client";

import { TypeAnimation } from "react-type-animation";

interface TypewriterEffectProps {
  sequences: (string | number)[];
  className?: string;
}

export function TypewriterEffect({
  sequences,
  className,
}: TypewriterEffectProps) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className={className}
      cursor={true}
    />
  );
}
