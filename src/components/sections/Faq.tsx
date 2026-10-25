import { contact } from "../../data/site";

// FAQ answers contain inline links and bold markup, so they stay as JSX
// here (verbatim from the original page) rather than being flattened
// into plain strings in src/data/site.ts.
export default function Faq() {
  return (
    <section id="faq" style={{paddingTop: '0'}}>
      <div className="wrap">
        <div className="sec-head center">
          <p className="kicker">Good to know</p>
          <h2>Questions, answered</h2>
        </div>
        <div className="faq">
          <details>
            <summary>What kinds of spaces do you design?<span className="plus" aria-hidden="true">+</span></summary>
            <p>Homes (flats and houses), offices, showrooms, restaurants and other commercial spaces. If it's an interior — or a residential building that needs architectural and structural design — talk to us about it.</p>
          </details>
          <details>
            <summary>What does the complete interior solution include?<span className="plus" aria-hidden="true">+</span></summary>
            <p>Four things under one team: <strong>Design, Planning, Furniture and Execution</strong>. Through Alpha Interior and Furniture, the furniture for your space is part of the same plan, and our team carries the work through on site until it's finished.</p>
          </details>
          <details>
            <summary>Where are you located?<span className="plus" aria-hidden="true">+</span></summary>
            <p>{contact.addressBold}, {contact.addressRest}. The studio is listed as always open — call <a href={`tel:${contact.phoneTel}`} style={{fontWeight: '800', color: 'var(--blue)'}}>{contact.phoneDisplay}</a> before you visit.</p>
          </details>
          <details>
            <summary>Do you only work in Dhaka?<span className="plus" aria-hidden="true">+</span></summary>
            <p>The studio is based in Dhaka and speaks to clients across Bangladesh. Call us with your location and project, and we'll tell you honestly how we can help.</p>
          </details>
          <details>
            <summary>How do I start a project?<span className="plus" aria-hidden="true">+</span></summary>
            <p>Call <a href={`tel:${contact.phoneTel}`} style={{fontWeight: '800', color: 'var(--blue)'}}>{contact.phoneShort}</a>, email <a href={`mailto:${contact.email}`} style={{fontWeight: '800', color: 'var(--blue)'}}>{contact.email}</a>, message the <a href={contact.facebookUrl} target="_blank" rel="noopener" style={{fontWeight: '800', color: 'var(--blue)'}}>Facebook page</a>, or use the consultation form below — it prepares your details as an email, ready to send.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
