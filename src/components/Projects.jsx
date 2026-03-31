import { motion } from "framer-motion";
import "../styles/projects.css";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">
        Things I've <span>built</span>
      </h2>

      <div className="bento-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`bento-card bento-card--${i === 0 ? 'featured' : 'normal'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="bento-card__top">
              <div className="bento-card__number mono">{String(i + 1).padStart(2, '0')}</div>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="bento-card__link" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              )}
            </div>

            <h3 className="bento-card__title">{p.name}</h3>
            <p className="bento-card__desc">{p.desc}</p>

            <div className="bento-card__tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag mono">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}