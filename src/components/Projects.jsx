import "../styles/projects.css";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span>{p.tech.join(" • ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}