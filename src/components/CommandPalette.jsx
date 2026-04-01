import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/command-palette.css";

const commands = [
  { id: "home", title: "Go to Home", href: "#hero", icon: "🏠" },
  { id: "projects", title: "View Projects", href: "#projects", icon: "🏗️" },
  { id: "skills", title: "View Skills", href: "#skills", icon: "⚡" },
  { id: "opensource", title: "Open Source", href: "#opensource", icon: "🌍" },
  { id: "signals", title: "Engineering Focus", href: "#signals", icon: "🛠️" },
  { id: "copy-email", title: "Copy Email", action: "copy-email", icon: "📧" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !isOpen) {
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
            setIsOpen(true);
        }
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const executeCommand = (cmd) => {
    if (cmd.action === "copy-email") {
      navigator.clipboard.writeText("msharma.dev.in@gmail.com");
    } else if (cmd.href) {
      document.querySelector(cmd.href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleListKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredCommands.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        executeCommand(filteredCommands[selectedIndex]);
      }
    }
  };

  return (
    <>
      <div className="cp-hint mono">Press <kbd>/</kbd> for commands</div>
      <AnimatePresence>
        {isOpen && (
          <div className="cp-overlay" onClick={() => setIsOpen(false)}>
            <motion.div
              className="cp-modal"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={handleListKeyDown}
            >
              <div className="cp-header">
                <input
                  ref={inputRef}
                  className="cp-input mono"
                  placeholder="Search commands... (Use ↑↓ arrows to navigate)"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                />
                <span className="cp-esc">ESC</span>
              </div>
              <ul className="cp-list">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => (
                    <li
                      key={cmd.id}
                      className={`cp-item ${idx === selectedIndex ? "active" : ""}`}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => executeCommand(cmd)}
                    >
                      <span className="cp-icon">{cmd.icon}</span>
                      <span className="cp-title">{cmd.title}</span>
                      {idx === selectedIndex && <span className="cp-enter mono">↵ Enter</span>}
                    </li>
                  ))
                ) : (
                  <li className="cp-empty mono">No commands found.</li>
                )}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
