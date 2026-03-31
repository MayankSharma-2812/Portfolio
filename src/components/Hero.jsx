"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Open Source Contributor",
  "Problem Solver",
];

function useTypingAnimation(words, typingSpeed = 80, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypingAnimation(roles);

  return (
    <section className="hero" id="hero">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__layout">
        {/* Left — Intro text */}
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </span>

          <h1 className="hero__title">
            Building the future,<br />
            <span className="hero__name">one commit at a time.</span>
          </h1>

          <p className="hero__description">
            I'm Mayank — a developer who thrives at the intersection of
            full-stack engineering and machine learning, with a passion for
            open source.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/resume.pdf" className="btn-outline" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right — Terminal Code Block */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="terminal">
            <div className="terminal__header">
              <div className="terminal__dots">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--yellow" />
                <span className="terminal__dot terminal__dot--green" />
              </div>
              <span className="terminal__title">mayank.js</span>
            </div>
            <div className="terminal__body">
              <pre className="terminal__code">
<span className="code-keyword">const</span> <span className="code-var">mayank</span> = {"{"}{"\n"}
{"  "}<span className="code-key">role</span>: <span className="code-string">"<span className="hero__typed">{typedText}</span><span className="hero__cursor">|</span>"</span>,{"\n"}
{"  "}<span className="code-key">location</span>: <span className="code-string">"India 🇮🇳"</span>,{"\n"}
{"  "}<span className="code-key">passion</span>: [<span className="code-string">"AI"</span>, <span className="code-string">"Web"</span>, <span className="code-string">"OSS"</span>],{"\n"}
{"  "}<span className="code-key">coffee</span>: <span className="code-boolean">true</span>,{"\n"}
{"  "}<span className="code-method">build</span>: () {"=>"} <span className="code-string">"amazing things"</span>,{"\n"}
{"}"};
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
