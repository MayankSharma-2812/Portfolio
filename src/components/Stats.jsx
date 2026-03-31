import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "../styles/stats.css";

const stats = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Open Source PRs" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 1000, suffix: "+", label: "Lines of Code" },
];

function AnimatedCounter({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="stats__number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats__grid">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stats__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <span className="stats__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
