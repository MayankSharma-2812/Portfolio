import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projects.css";
import { projects } from "../data/data";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <span className="section-label">Projects</span>
      <div className="projects-header">
        <h2 className="section-title">
          Things I've <span>built</span>
        </h2>
        <div className="project-filters mono">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="bento-grid">
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              key={p.name}
              className={`bento-card bento-card--${i === 0 ? "featured" : "normal"}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bento-card__top">
                <div className="bento-card__number mono">
                  {String(projects.indexOf(p) + 1).padStart(2, "0")}
                </div>
                <div className="bento-card__top-actions">
                  <span className="project-category mono">{p.category}</span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-card__link"
                      aria-label="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="bento-card__title">{p.name}</h3>

              <div className="project-details">
                <p><strong>Problem:</strong> {p.problem}</p>
                <p><strong>Solution:</strong> {p.solution}</p>
                <p><strong>Impact:</strong> {p.impact}</p>
                <p><strong>Highlight:</strong> {p.techHighlight}</p>
              </div>

              <div className="project-lessons mono">
                ▸ {p.lessonsLearned}
              </div>

              <div className="bento-card__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag mono">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}