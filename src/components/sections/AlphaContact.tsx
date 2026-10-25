import { Link } from "react-router-dom";
import { contact } from "../../data/site";

export default function AlphaContact() {
  return (
    <section id="alpha-contact" className="alpha-contact">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Talk to Alpha — draft</p>
          <h2>Start with the room you use most</h2>
          <p>Tell us which room, and what you do in it every day. That is where an Alpha conversation starts.</p>
        </div>
        <p>Call us — always open: <a href={`tel:${contact.phoneTel}`} style={{fontWeight: '800', color: 'var(--wood-dark)'}}>{contact.phoneDisplay}</a></p>
        <p>Email: <a href={`mailto:${contact.email}`} style={{fontWeight: '800', color: 'var(--wood-dark)'}}>{contact.email}</a></p>
        <p>Studio: <b>{contact.addressBold}</b>, {contact.addressRest}</p>
        <div className="biz-card-links">
          <a className="btn btn-wood btn-sm" href={contact.alphaFacebookUrl} target="_blank" rel="noopener">Facebook — Alpha Interior</a>
          <a className="btn btn-ghost btn-sm" href={`tel:${contact.phoneTel}`}>Call {contact.phoneShort}</a>
          <Link className="btn btn-ghost btn-sm" to="/#contact">Request a consultation</Link>
          <Link className="btn btn-ghost btn-sm" to="/">← Back to First Engineering home</Link>
        </div>
      </div>
    </section>
  );
}
