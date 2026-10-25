import { useState } from "react";
import { contact } from "../../data/site";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  function handleCopy(text: string) {
    const done = () => {
      setCopied(text);
      window.setTimeout(() => setCopied(null), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* clipboard fallback only */
      }
      document.body.removeChild(ta);
      done();
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const n = name.trim();
    const p = phone.trim();
    const ty = spaceType;
    const ar = area.trim();
    const msg = message.trim();
    if (!n || !ty) {
      setFormStatus("Please add your name and the type of space, then try again.");
      return;
    }
    const subject = `Consultation request — ${ty} (${n})`;
    const lines = [
      "Hello First Engineering team,",
      "",
      "I would like a consultation for my space.",
      "",
      `Name: ${n}`,
      p ? `Phone: ${p}` : null,
      `Type of space: ${ty}`,
      ar ? `Location / area: ${ar}` : null,
      msg ? "" : null,
      msg ? "About the project:" : null,
      msg ? msg : null,
      "",
      "Thank you.",
    ].filter((x): x is string => x !== null);
    const href =
      "mailto:fastengineering08@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));
    setFormStatus("Opening your email app with your request ready to send…");
    const a = document.createElement("a");
    a.href = href;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h2>Let's talk about your space</h2>
          <p className="intro">One call is enough to start. Tell us whether it's a home, an office, a showroom or a restaurant — and what you'd like it to become.</p>
          <div className="c-rows">
            <div className="c-row">
              <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
              <div><small>Call us — always open</small><a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a><p>Tap to call from your phone.</p></div>
              <button className="copy-btn" type="button" data-copy="+8801673630006" onClick={() => handleCopy("+8801673630006")}>{copied === "+8801673630006" ? "Copied ✓" : "Copy"}</button>
            </div>
            <div className="c-row">
              <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></span>
              <div><small>Email</small><a href={`mailto:${contact.email}`}>{contact.email}</a><p>As listed on our Facebook page.</p></div>
              <button className="copy-btn" type="button" data-copy="fastengineering08@gmail.com" onClick={() => handleCopy("fastengineering08@gmail.com")}>{copied === "fastengineering08@gmail.com" ? "Copied ✓" : "Copy"}</button>
            </div>
            <div className="c-row">
              <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <div><small>Studio</small><b>{contact.addressBold}</b><p>{contact.addressRest}</p></div>
            </div>
            <div className="c-row">
              <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></span>
              <div><small>Facebook · 8,000+ followers</small><a href={contact.facebookUrl} target="_blank" rel="noopener">{contact.facebookHandle}</a><p>Latest projects, site visits and updates.</p></div>
            </div>
          </div>
        </div>
        <div className="form-card">
          <h3>Request a consultation</h3>
          <p>Fill this in and we'll open it as a ready-to-send email to the studio — or just call us instead.</p>
          <form id="consultForm" noValidate onSubmit={handleSubmit}>
            <div className="f-row">
              <div className="field"><label htmlFor="fName">Your name *</label><input id="fName" name="name" type="text" autoComplete="name" placeholder="e.g. Rahim Uddin" required value={name} onChange={(e) => setName(e.target.value)} /></div>
              <div className="field"><label htmlFor="fPhone">Your phone</label><input id="fPhone" name="phone" type="tel" autoComplete="tel" placeholder="01XXX-XXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
            </div>
            <div className="f-row">
              <div className="field"><label htmlFor="fType">Type of space *</label>
                <select id="fType" name="type" required value={spaceType} onChange={(e) => setSpaceType(e.target.value)}>
                  <option value="">Choose one…</option>
                  <option>Home / flat interior</option>
                  <option>Office interior</option>
                  <option>Showroom / retail</option>
                  <option>Restaurant / café</option>
                  <option>Building design (architecture &amp; structure)</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field"><label htmlFor="fArea">Location / area</label><input id="fArea" name="area" type="text" placeholder="e.g. Uttara, Dhaka" value={area} onChange={(e) => setArea(e.target.value)} /></div>
            </div>
            <div className="field"><label htmlFor="fMsg">Tell us about your project</label><textarea id="fMsg" name="message" placeholder="Size of the space, rooms, what you'd like done, any timeline…" value={message} onChange={(e) => setMessage(e.target.value)}></textarea></div>
            <div className="form-actions">
              <button className="btn btn-blue" type="submit">Prepare my email to the studio</button>
              <a className="btn btn-ghost" href={`tel:${contact.phoneTel}`}>Or call {contact.phoneDisplay}</a>
            </div>
            <p className="status" id="formStatus" role="status" aria-live="polite">{formStatus}</p>
            <p className="form-note">The button opens your email app with everything filled in — nothing is sent until you press send there.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
