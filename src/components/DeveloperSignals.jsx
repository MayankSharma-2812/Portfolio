import { motion } from "framer-motion";
import { developerSignals } from "../data/data";
import "../styles/developer-signals.css";

export default function DeveloperSignals() {
  return (
    <section id="signals">
      <span className="section-label">Engineering Focus</span>
      <h2 className="section-title">
        How I <span>build</span>
      </h2>
      <div className="signals-grid">
        <motion.div className="signal-card" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <h3>What I've worked on</h3>
          <ul className="signal-list">
            {developerSignals.workedOn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="signal-card signal-card--alt" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}>
          <h3>What I care about</h3>
          <ul className="signal-list mono">
            {developerSignals.careAbout.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
