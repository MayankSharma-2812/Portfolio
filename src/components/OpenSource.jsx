import { motion } from "framer-motion";
import "../styles/opensource.css";

const contributions = [
  {
    title: "Fixed probabilistic metrics & estimators",
    desc: "Identified and fixed correctness issues in probabilistic ML metrics, improving reliability of downstream model evaluation.",
    pr: { number: 833, url: "https://github.com/sktime/skpro/pull/833" },
  },
  {
    title: "Refactored CyclicBoosting validation",
    desc: "Removed duplicated validation logic in CyclicBoosting estimator, improving code maintainability and reducing surface area for bugs.",
    pr: { number: 813, url: "https://github.com/sktime/skpro/pull/813" },
  },
  {
    title: "Improved error handling & documentation",
    desc: "Enhanced typing, error handling, and developer documentation across multiple modules in the skpro library.",
    pr: { number: 917, url: "https://github.com/sktime/skpro/pull/917" },
  },
];

export default function OpenSource() {
  return (
    <section id="opensource">
      <span className="section-label">Open Source</span>
      <h2 className="section-title">
        Contributions to <span>real-world projects</span>
      </h2>

      <div className="oss-grid">
        <motion.div
          className="oss-context"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="oss-org-badge">
            <span className="oss-org-badge__icon mono">skpro</span>
            <div>
              <h3>sktime / skpro</h3>
              <p>Production-grade probabilistic ML libraries</p>
            </div>
          </div>
        </motion.div>

        <div className="oss-contributions">
          {contributions.map((c, i) => (
            <motion.div
              key={i}
              className="oss-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="oss-item__index mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="oss-item__content">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <a href={c.pr.url} target="_blank" rel="noopener noreferrer" className="oss-item__pr mono">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>
                  #{c.pr.number}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}