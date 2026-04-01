import { motion } from "framer-motion";
import { failures } from "../data/data";
import "../styles/failures.css";

export default function Failures() {
  return (
    <section id="failures">
      <span className="section-label">Autopsy</span>
      <h2 className="section-title">
        Things that <span>didn't work</span>
      </h2>
      <p className="failures-intro">Because we only talk about the wins, but we learn from the losses.</p>
      <div className="failures-list">
        {failures.map((f, i) => (
          <motion.div key={i} className="failure-card" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: i*0.1}}>
            <h3>{f.name}</h3>
            <p className="failure-desc">{f.description}</p>
            <div className="failure-lesson mono">
              <strong>Lesson:</strong> {f.lesson}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
