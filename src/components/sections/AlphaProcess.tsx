import { alphaProcessSteps } from "../../data/site";

export default function AlphaProcess() {
  return (
    <section className="alpha-craft">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">The Alpha craft — draft</p>
          <h2>Design. Make. Fit.</h2>
          <p>A shorter, craft-led process for Alpha, distinct from the home page&apos;s architecture process. Draft wording for review.</p>
        </div>
        <div className="process-grid alpha-craft-grid">
          {alphaProcessSteps.map((step) => (
            <div className="step" key={step.num}><div className="num">{step.num}</div><h3>{step.title}</h3><p>{step.description}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
