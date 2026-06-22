"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Using Formspree — replace with environment variable or fallback ID
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "YOUR_FORM_ID";
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to collaborate? Let's connect!"
    >
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-card-border bg-card px-4 py-3 text-sm backdrop-blur-sm transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-card-border bg-card px-4 py-3 text-sm backdrop-blur-sm transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-card-border bg-card px-4 py-3 text-sm backdrop-blur-sm transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-sm text-emerald-500"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully!
                </motion.span>
              )}

              {status === "error" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-sm text-red-500"
                >
                  <AlertCircle className="h-4 w-4" />
                  Failed to send. Please try again.
                </motion.span>
              )}
            </div>
          </form>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="glass-card p-6">
            <h3 className="mb-6 text-lg font-semibold">Connect with me</h3>

            <div className="space-y-4">
              <a
                href="https://github.com/SiddharthBarkund"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl p-2 -mx-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <GithubIcon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">GitHub</div>
                  <div className="text-xs">@SiddharthBarkund</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/siddharth-barkund-707378264/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl p-2 -mx-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <LinkedinIcon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">LinkedIn</div>
                  <div className="text-xs">barkundsiddharth</div>
                </div>
              </a>

              <a
                href="mailto:barkundsiddharth4@gmail.com"
                className="flex items-center gap-3 rounded-xl p-2 -mx-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-xs">barkundsiddharth4@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
