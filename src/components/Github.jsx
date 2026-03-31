import { motion } from "framer-motion";
import "../styles/github.css";

export default function Github() {
  return (
    <section id="github">
      <span className="section-label">Activity</span>
      <h2 className="section-title">
        My <span>GitHub</span>
      </h2>

      <motion.div
        className="github__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="github__stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=MayankSharma-2812&show_icons=true&theme=transparent&text_color=a1a1b5&title_color=8b5cf6&icon_color=8b5cf6&border_color=1a1a2e&hide_border=true&bg_color=00000000"
            alt="GitHub Stats"
            className="github__img"
            loading="lazy"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=MayankSharma-2812&theme=transparent&ring=8b5cf6&fire=06b6d4&currStreakLabel=8b5cf6&sideLabels=a1a1b5&currStreakNum=f0f0f5&sideNums=f0f0f5&dates=6b6b80&border=1a1a2e&hide_border=true"
            alt="GitHub Streak"
            className="github__img"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}