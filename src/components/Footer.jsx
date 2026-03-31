import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Mayank Sharma
        </p>
        <p className="footer__made">
          Crafted with <span className="footer__heart">♥</span> and a lot of coffee
        </p>
      </div>
    </footer>
  );
}
