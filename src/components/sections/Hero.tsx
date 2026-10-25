import { contact } from "../../data/site";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="pill"><i></i> Mohammadpur · Dhaka, Bangladesh</span>
          <h1>Your space, your need — <span className="accent">solution in one place.</span></h1>
          <p className="bn-line bn">আপনার স্পেস, আপনার প্রয়োজন — সমাধান এক জায়গায়।</p>
          <p className="lede">First Engineering is a Dhaka studio for architecture, structural engineering and complete interiors. From a family home to an office, showroom or restaurant, one team takes your space from first sketch to finished room — design, planning, furniture and execution.</p>
          <div className="hero-cta">
            <a className="btn btn-wood" href={`tel:${contact.phoneTel}`}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call {contact.phoneShort}
            </a>
            <a className="btn btn-ghost" href="#contact">Request a consultation</a>
          </div>
          <div className="hero-meta">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> Always open</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> 8,000+ followers on Facebook</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Design to handover, one team</span>
          </div>
        </div>
        <div className="hero-photo">
          <div className="main"><img src="/images/image-01.png" alt="Modern apartment living room designed with a grey sofa, marble floor, wood panelling and a glass-partitioned dining space" /></div>
          <div className="hero-card">
            <strong><span className="fe">Alpha Interior</span> — a concern of First Engineering</strong>
            <p>Complete interior solutions for homes &amp; commercial spaces, with furniture built for your plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
