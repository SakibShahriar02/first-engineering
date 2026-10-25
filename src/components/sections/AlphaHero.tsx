import { contact } from "../../data/site";

export default function AlphaHero() {
  return (
    <section className="alpha-hero">
      <div className="wrap alpha-hero-grid">
        <div>
          <p className="kicker">Alpha Interior &amp; Furniture</p>
          <h1>Interiors shaped around the furniture you live with.</h1>
          <p className="lede">Start with the table you gather at, the bed you rest in, the counter you work behind. Alpha designs the pieces first, then shapes the room around them — so a home or a workplace feels made for you, not fitted afterwards.</p>
          <p className="alpha-relationship">A concern of First Engineering Architecture &amp; Interior Solutions — Alpha is the interior arm, not a separate company.</p>
          <div className="hero-cta">
            <a className="btn btn-wood" href="#alpha-contact" onClick={(e) => { e.preventDefault(); document.getElementById("alpha-contact")?.scrollIntoView({ behavior: "smooth" }); }}>Talk to Alpha about your room</a>
            <a className="btn btn-ghost" href={contact.alphaFacebookUrl} target="_blank" rel="noopener">Facebook — Alpha Interior</a>
          </div>
        </div>
        <div className="alpha-hero-photo">
          <img src="/images/image-03.png" alt="Apartment living room with grey sofa, marble flooring and wood-panelled walls" />
          <p className="gal-note">Style example — not an Alpha project photo.</p>
        </div>
      </div>
    </section>
  );
}
