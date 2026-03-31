import "../styles/skills.css";

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-box">
          <h3>Frontend</h3>
          <p>React, HTML, CSS, Vite</p>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <p>Node.js, Express, FastAPI, Flask</p>
        </div>

        <div className="skill-box">
          <h3>Languages</h3>
          <p>JavaScript, Python, C++</p>
        </div>

        <div className="skill-box">
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <p>Git, Docker, Linux</p>
        </div>

        <div className="skill-box">
          <h3>Core</h3>
          <p>DSA, System Design, OOP</p>
        </div>

      </div>
    </section>
  );
}