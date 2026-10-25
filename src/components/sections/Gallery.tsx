import { useState } from "react";
import { contact, galleryItems } from "../../data/site";

const filters = [
  { key: "all", label: "All spaces" },
  { key: "home", label: "Homes" },
  { key: "work", label: "Offices" },
  { key: "commercial", label: "Showrooms & Restaurants" },
] as const;

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Spaces we design</p>
          <h2>Rooms that work as good as they look</h2>
          <p>The kinds of spaces the studio designs and delivers — from calm family living rooms to busy restaurants. The photos are style examples of each space type; filter by the kind of space you're planning.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter gallery by space type">
          {filters.map((f) => (
            <button key={f.key} className="chip" type="button" data-filter={f.key} aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>{f.label}</button>
          ))}
        </div>
        <div className="gal" id="gallery">
          {galleryItems.map((item) => (
            <figure key={item.src + item.title} data-cat={item.category} className={filter === "all" || filter === item.category ? undefined : "hide"}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption><b>{item.title}</b><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="gal-note">Photos above are style examples of the spaces we design. See the studio's own projects, site visits and finished rooms on <a href={contact.facebookUrl} target="_blank" rel="noopener" style={{fontWeight: '800', color: 'var(--blue)'}}>Facebook — {contact.facebookHandle}</a>.</p>

        <div className="wide-banner">
          <img src="/images/image-12.jpg" alt="" aria-hidden="true" />
          <div className="wb-in">
            <h3>Opening a restaurant, showroom or office?</h3>
            <p>Commercial spaces need design, furniture and execution to move together — that's exactly how we work. Call us before you sign the lease, and plan the space right from the start.</p>
            <div style={{marginTop: '18px', display: 'flex', flexWrap: 'wrap', gap: '11px'}}>
              <a className="btn btn-white btn-sm" href={`tel:${contact.phoneTel}`}>Call {contact.phoneShort}</a>
              <a className="btn btn-outline-w btn-sm" href="#contact">Tell us about your space</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
