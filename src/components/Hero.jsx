"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/hero.css";

const exploringTopics = [
  "distributed systems",
  "ML reliability",
  "high-performance APIs",
  "scalable web architectures"
];

export default function Hero() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopicIndex((prev) => (prev + 1) % exploringTopics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("msharma.dev.in@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__layout">
        {/* Left — Intro text */}
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero__badge mono">
            <span className="hero__badge-dot" />
            System.status === "available"
          </span>

          <h1 className="hero__title">
            Engineering robust systems,<br />
            <span className="hero__name">built to scale.</span>
          </h1>

          <div className="hero__about">
            <p>
              Hi, I'm Mayank. I'm a software engineer focused on backend architecture, machine learning integrations, and developer tooling. 
              I care about writing clean, maintainable code and solving complex performance bottlenecks.
            </p>
          </div>

          <div className="hero__exploring mono">
            <span className="exploring-label">Currently exploring:</span>
            <span className="exploring-topic">
              <AnimatePresence mode="wait">
                <motion.span
                  key={topicIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "inline-block" }}
                >
                  {exploringTopics[topicIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            </a>
            <button onClick={handleCopyEmail} className="btn-outline">
              {copied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copy Email
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right — Developer Profile (Raw Code Block without gimmicky UI) */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="raw-code-block">
            <pre className="mono">
<span className="comment">// profile.config.ts</span>{"\n"}
<span className="keyword">export const</span> <span className="variable">developerProfile</span> = {"{"}{"\n"}
{"  "}<span className="property">name</span>: <span className="string">"Mayank"</span>,{"\n"}
{"  "}<span className="property">role</span>: <span className="string">"Software Engineer"</span>,{"\n"}
{"  "}<span className="property">core_focus</span>: [<span className="string">"Backend Systems"</span>, <span className="string">"Machine Learning"</span>],{"\n"}
{"  "}<span className="property">principles</span>: [{"\n"}
{"    "}<span className="string">"Clean APIs"</span>,{"\n"}
{"    "}<span className="string">"High Performance"</span>,{"\n"}
{"    "}<span className="string">"Excellent DX"</span>{"\n"}
{"  "}],{"\n"}
{"  "}<span className="property">status</span>: <span className="keyword">200</span>,{"\n"}
{"}"};
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
