import { alphaSpaces } from "../../data/site";

export default function AlphaSpaces() {
  return (
    <section className="alpha-spaces">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Alpha spaces — draft</p>
          <h2>Rooms, read through their furniture</h2>
          <p>All photos are style examples, shown here to test Alpha&apos;s furniture-led framing — not Alpha project photos.</p>
        </div>
        <div className="gal">
          {alphaSpaces.map((space) => (
            <figure key={space.title}>
              <img src={space.src} alt={space.alt} loading="lazy" />
              <figcaption><b>{space.title}</b><span>{space.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
