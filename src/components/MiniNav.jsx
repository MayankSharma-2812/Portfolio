import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MiniNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <AnimatePresence>
      {activeSection && activeSection !== "hero" && activeSection !== "projects" && ( // Example: show globally but some may be excluded if needed. Let's show everywhere except hero.
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--bg-card)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid var(--border-hover)",
            padding: "8px 24px",
            borderRadius: "var(--radius-full)",
            zIndex: 9000,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)"
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }}></span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.05em" }} className="mono">
            // {activeSection}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
