import { motion } from "framer-motion";
import "../styles/opensource.css";
import { openSource } from "../data/data";

export default function OpenSource() {
  return (
    <section id="opensource">
      <span className="section-label">Giving Back</span>
      <h2 className="section-title">
        Open <span>Source</span>
      </h2>

      <div className="commit-list">
        {openSource.map((oss, i) => (
          <motion.div
            key={i}
            className="commit-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="commit-timeline">
              <div className="commit-dot"></div>
              {i !== openSource.length - 1 && <div className="commit-line"></div>}
            </div>
            
            <div className="commit-content">
              <div className="commit-header">
                <h3 className="commit-title">{oss.title}</h3>
                <a href={oss.link} target="_blank" rel="noopener noreferrer" className="commit-link mono">
                  View PR ↗
                </a>
              </div>
              
              <div className="commit-details">
                <p><strong>Problem:</strong> {oss.problem}</p>
                <p><strong>Impact:</strong> {oss.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}