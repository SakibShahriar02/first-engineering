import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Not found</p>
          <h2>That page doesn&apos;t exist</h2>
          <p>The link you followed may be out of date, or the page may have moved.</p>
          <div className="hero-cta">
            <Link className="btn btn-wood" to="/">Back to First Engineering home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
