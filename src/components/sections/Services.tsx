import { services } from "../../data/site";

// Icons are structural SVG markup kept in the original service order;
// titles, descriptions and bullet lists render from src/data/site.ts.
const icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4M9 10h.01M15 10h.01M12 13h.01"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4M7 9h4M7 12.5h7"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7 5.5 3h13L20 7M4 7h16M4 7v13h16V7"/><path d="M9.5 20v-5h5v5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h16M6 11V6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5V11"/><path d="M3 13.5A1.5 1.5 0 0 1 4.5 12h15A1.5 1.5 0 0 1 21 13.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" transform="translate(0,-1)"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M4 21h16M8 12v9M16 12v9"/></svg>,
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">What we do</p>
          <h2>Everything your space needs, in one place</h2>
          <p>Tell us the space and how you want to live or work in it. We handle the rest — from the first plan to the final piece of furniture.</p>
        </div>
        <div className="svc-grid">
          {services.map((service, i) => (
            <article className="svc" key={service.title}>
              <div className="ico">{icons[i]}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
