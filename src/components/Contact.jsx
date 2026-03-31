export default function Contact() {
  return (
    <section style={{ textAlign: "center" }}>
      <h2>Contact</h2>

      <p>Email: msharma.dev.in@gmail.com</p>

      <div style={{ marginTop: "20px" }}>
        <a href="../public/resume.pdf" download>
          <button className="cta">Download Resume</button>
        </a>
      </div>
    </section>
  );
}