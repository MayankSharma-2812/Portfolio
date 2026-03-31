"use client";
import { motion } from "framer-motion";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Mayank Sharma
      </motion.h1>
      <button
        className="theme-toggle"
        onClick={() => {
          document.body.classList.toggle("light");
        }}
      >
        Toggle Theme
      </button>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Full Stack Developer & AI/ML Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Building scalable applications, AI-powered tools, and production-ready
        systems.
      </motion.p>
    </section>
  );
}
