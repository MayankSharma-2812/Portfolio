import "../styles/opensource.css";

export default function OpenSource() {
  return (
    <section className="opensource">
      <h2>Open Source</h2>

      <div className="opensource-card">
        <h3>sktime / skpro Contributor</h3>

        <p>
          Contributed to production-grade probabilistic ML libraries by fixing
          correctness issues, improving code quality, and enhancing developer experience.
        </p>

        <ul>
          <li>Fixed issues in probabilistic metrics & estimators</li>
          <li>Refactored CyclicBoosting to remove duplicated validation logic</li>
          <li>Improved error handling, typing, and documentation</li>
        </ul>

        <div className="links">
          <a href="https://github.com/sktime/skpro/pull/833" target="_blank">PR #833</a>
          <a href="https://github.com/sktime/skpro/pull/813" target="_blank">PR #813</a>
          <a href="https://github.com/sktime/skpro/pull/917" target="_blank">PR #917</a>
        </div>
      </div>
    </section>
  );
}