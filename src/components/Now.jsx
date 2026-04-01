import { motion } from "framer-motion";
import { now } from "../data/data";
import "../styles/now.css";

export default function Now() {
  return (
    <section id="now">
      <span className="section-label">Now</span>
      <h2 className="section-title">
        What I'm doing <span>now</span>
      </h2>
      <div className="now-content">
        <p className="now-intro mono">/* Updated April 2026. Here's what has my attention right now. */</p>
        <div className="now-grid">
          <motion.div className="now-item" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h4>Learning</h4>
            <p>{now.learning}</p>
          </motion.div>
          <motion.div className="now-item" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}>
            <h4>Building</h4>
            <p>{now.building}</p>
          </motion.div>
          <motion.div className="now-item" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
            <h4>Listening to</h4>
            <p>{now.listening}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
