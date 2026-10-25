import { processSteps } from "../../data/site";

export default function Process() {
  return (
    <section id="process" style={{paddingTop: '0'}}>
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">How it works</p>
          <h2>From your idea to a finished space, in four steps</h2>
          <p className="bn" style={{fontWeight: '600'}}>আপনার ভাবনাকে বাস্তব রূপ দিতে শুরু হোক আজই — start today to give your idea real form.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="step" key={step.num}><div className="num">{step.num}</div><h3>{step.title}</h3><p>{step.description}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
