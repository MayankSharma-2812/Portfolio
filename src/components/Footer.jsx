import { useEffect, useState } from "react";
import "../styles/footer.css";

export default function Footer() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const current = parseInt(localStorage.getItem("page_views") || "3141", 10);
    const updated = current + 1;
    localStorage.setItem("page_views", updated.toString());
    setViews(updated);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__inner mono">
        <p className="footer__copy">
          © {new Date().getFullYear()} Mayank Sharma
        </p>
        <p className="footer__made">
          <span className="footer__views">Views: {views.toLocaleString()}</span>
          <span className="footer__divider"> | </span> 
          <span>Built with React & Vite</span>
        </p>
      </div>
    </footer>
  );
}
