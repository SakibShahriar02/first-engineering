import { alphaIdeas } from "../../data/site";

export default function AlphaIdeas() {
  return (
    <section className="alpha-ideas">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Signature ideas — draft</p>
          <h2>Four ideas Alpha could be known for</h2>
          <p>Draft ideas for review — keep, change, or drop any of these. They are proposed concepts, not Alpha&apos;s confirmed catalogue.</p>
        </div>
        <div className="svc-grid">
          {alphaIdeas.map((idea) => (
            <article className="svc" key={idea.title}>
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
