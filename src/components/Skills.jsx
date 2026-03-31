import { motion } from "framer-motion";
import "../styles/Skills.css";
import { skills } from "../data/data";

// Flatten all skills into a single array for the marquee
const allSkills = skills.flatMap((s) => s.items);
// Double them for seamless loop
const marqueeSkills = [...allSkills, ...allSkills];

export default function Skills() {
  return (
    <section id="skills">
      <span className="section-label">Tech Stack</span>
      <h2 className="section-title">
        Technologies I <span>work with</span>
      </h2>

      {/* Infinite Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeSkills.map((skill, i) => (
            <span key={`${skill}-${i}`} className="marquee-item">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <motion.div
        className="skills-breakdown"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((group, i) => (
          <div key={group.category} className="skill-row">
            <span className="skill-row__label mono">{group.category}</span>
            <div className="skill-row__items">
              {group.items.map((item) => (
                <span key={item} className="skill-row__item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}