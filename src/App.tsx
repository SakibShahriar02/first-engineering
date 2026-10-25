import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
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
    const subject = `Consultation request \u2014 ${ty} (${n})`;
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
    setFormStatus("Opening your email app with your request ready to send\u2026");
    const a = document.createElement("a");
    a.href = href;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="First Engineering — home">
          <span className="mark" aria-hidden="true">F<em>E</em></span>
          <span className="brand-text">
            <strong>First Engineering</strong>
            <span>Architecture &amp; Interior Solutions</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Spaces</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn-blue btn-sm" href="tel:+8801673630006">Call +880 1673-630006</a>
        </nav>
        <button className="menu-btn" id="menuBtn" aria-expanded={menuOpen} aria-controls="mobileMenu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((v) => !v)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
      <div className={`wrap mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu" onClick={() => setMenuOpen(false)}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Spaces</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
    </header>

    <main id="top">


      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="pill"><i></i> Mohammadpur · Dhaka, Bangladesh</span>
            <h1>Your space, your need — <span className="accent">solution in one place.</span></h1>
            <p className="bn-line bn">আপনার স্পেস, আপনার প্রয়োজন — সমাধান এক জায়গায়।</p>
            <p className="lede">First Engineering is a Dhaka studio for architecture, structural engineering and complete interiors. From a family home to an office, showroom or restaurant, one team takes your space from first sketch to finished room — design, planning, furniture and execution.</p>
            <div className="hero-cta">
              <a className="btn btn-wood" href="tel:+8801673630006">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 01673-630006
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


      <div className="strip" aria-label="At a glance">
        <div className="wrap strip-in">
          <div className="cell"><b>Home + Commercial</b><span>Flats, houses, offices, showrooms &amp; restaurants</span></div>
          <div className="cell"><b>4-in-1 service</b><span>Design · Planning · Furniture · Execution</span></div>
          <div className="cell"><b>Structural + Interior</b><span>Engineering and design under one roof</span></div>
          <div className="cell"><b>Always open</b><span>House 29, Katasur, Mohammadpur, Dhaka-1207</span></div>
        </div>
      </div>


      <section id="about">
        <div className="wrap about-grid">
          <div className="about-photo">
            <img src="/images/image-02.jpg" alt="Modern multi-storey residential building with glass balconies against a clear sky" />
          </div>
          <div className="about-copy">
            <p className="kicker">About the studio</p>
            <h2>Engineers who design. Designers who build.</h2>
            <p>Listed on Facebook as both a <strong>Structural Engineer</strong> and an <strong>Interior Design Studio</strong>, First Engineering Architecture &amp; Interior Solutions brings the two halves of a project together. The structure is thought through by engineers; the rooms are finished by designers — so what gets drawn is what gets built.</p>
            <p>From its Mohammadpur studio in Dhaka, the team works on residential buildings and interiors across the city, and on commercial spaces where layout, furniture and finish have to work hard from day one.</p>
            <div className="alpha">
              <span className="tag">Our interior concern</span>
              <h3>Alpha Interior &amp; Furniture</h3>
              <p>Alpha Interior is the interior arm of First Engineering — a complete interior solution covering design, planning, furniture and execution for your home, office, showroom, restaurant or other commercial space.</p>
              <p className="bn" style={{fontWeight: '600', color: 'var(--wood-dark)'}}>আপনার ভাবনাকে বাস্তব রূপ দিতে শুরু হোক আজই। <span style={{color: 'var(--muted)', fontWeight: '500'}}>— Start today to give your idea real form.</span></p>
            </div>
            <ul className="checklist">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> One point of contact, start to finish</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Furniture planned with the room, not after it</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Site visits and supervised execution</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Homes and businesses, across Bangladesh</li>
            </ul>
          </div>
        </div>
      </section>


      <section className="services" id="services">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">What we do</p>
            <h2>Everything your space needs, in one place</h2>
            <p>Tell us the space and how you want to live or work in it. We handle the rest — from the first plan to the final piece of furniture.</p>
          </div>
          <div className="svc-grid">
            <article className="svc">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4M9 10h.01M15 10h.01M12 13h.01"/></svg></div>
              <h3>Architecture &amp; Structural Design</h3>
              <p>Building design backed by structural engineering, so residential projects stand safe and are planned properly from the ground up.</p>
              <ul><li>Residential building design</li><li>Structural engineering</li><li>Space planning &amp; layouts</li></ul>
            </article>
            <article className="svc">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg></div>
              <h3>Home Interior Design</h3>
              <p>Complete home interiors for flats and houses — living rooms, bedrooms and kitchens designed around your family and your daily life.</p>
              <ul><li>Living &amp; dining spaces</li><li>Bedrooms &amp; kitchens</li><li>Full-flat interior packages</li></ul>
            </article>
            <article className="svc">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4M7 9h4M7 12.5h7"/></svg></div>
              <h3>Office Interiors</h3>
              <p>Workplaces planned for focus and flow — workstations, cabins, meeting rooms and reception areas that present your business well.</p>
              <ul><li>Workstations &amp; cabins</li><li>Meeting &amp; reception areas</li><li>Space planning for teams</li></ul>
            </article>
            <article className="svc">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7 5.5 3h13L20 7M4 7h16M4 7v13h16V7"/><path d="M9.5 20v-5h5v5"/></svg></div>
              <h3>Showroom &amp; Retail Interiors</h3>
              <p>Showrooms and shops designed to display products clearly, guide customers through the space and carry your brand in every detail.</p>
              <ul><li>Product display planning</li><li>Counters &amp; feature walls</li><li>Lighting for retail</li></ul>
            </article>
            <article className="svc">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h16M6 11V6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5V11"/><path d="M3 13.5A1.5 1.5 0 0 1 4.5 12h15A1.5 1.5 0 0 1 21 13.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" transform="translate(0,-1)"/></svg></div>
              <h3>Restaurant &amp; Café Interiors</h3>
              <p>Dining spaces with atmosphere and a practical back-of-house — seating layouts, counters and finishes that hold up to daily service.</p>
              <ul><li>Dining layout &amp; seating</li><li>Counter &amp; service areas</li><li>Warm, durable finishes</li></ul>
            </article>
            <article className="svc">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M4 21h16M8 12v9M16 12v9"/></svg></div>
              <h3>Furniture &amp; Execution</h3>
              <p>Through Alpha Interior and Furniture, furniture is designed and made for your exact plan — then our team executes and supervises the work on site until handover.</p>
              <ul><li>Custom furniture by Alpha Interior</li><li>Fit-out &amp; finishing work</li><li>On-site supervision</li></ul>
            </article>
          </div>
        </div>
      </section>


      <section id="work">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Spaces we design</p>
            <h2>Rooms that work as good as they look</h2>
            <p>The kinds of spaces the studio designs and delivers — from calm family living rooms to busy restaurants. The photos are style examples of each space type; filter by the kind of space you're planning.</p>
          </div>
          <div className="filters" role="group" aria-label="Filter gallery by space type">
            <button className="chip" type="button" data-filter="all" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All spaces</button>
            <button className="chip" type="button" data-filter="home" aria-pressed={filter === "home"} onClick={() => setFilter("home")}>Homes</button>
            <button className="chip" type="button" data-filter="work" aria-pressed={filter === "work"} onClick={() => setFilter("work")}>Offices</button>
            <button className="chip" type="button" data-filter="commercial" aria-pressed={filter === "commercial"} onClick={() => setFilter("commercial")}>Showrooms &amp; Restaurants</button>
          </div>
          <div className="gal" id="gallery">
            <figure data-cat="home" className={filter === "all" || filter === "home" ? undefined : "hide"}>
              <img src="/images/image-03.png" alt="Apartment living room with grey sofa, marble flooring and wood-panelled walls" loading="lazy" />
              <figcaption><b>Living Room</b><span>Home interior · style example</span></figcaption>
            </figure>
            <figure data-cat="home" className={filter === "all" || filter === "home" ? undefined : "hide"}>
              <img src="/images/image-04.jpg" alt="Bedroom interior with a statement ceiling light, marble feature wall and vanity" loading="lazy" />
              <figcaption><b>Master Bedroom</b><span>Home interior · style example</span></figcaption>
            </figure>
            <figure data-cat="home" className={filter === "all" || filter === "home" ? undefined : "hide"}>
              <img src="/images/image-05.jpg" alt="Bright modern kitchen with a central island and pendant lights" loading="lazy" />
              <figcaption><b>Kitchen</b><span>Home interior · style example</span></figcaption>
            </figure>
            <figure data-cat="work" className={filter === "all" || filter === "work" ? undefined : "hide"}>
              <img src="/images/image-06.jpg" alt="Open-plan office with wooden desks, exposed ceiling and stone feature walls" loading="lazy" />
              <figcaption><b>Open-Plan Office</b><span>Office interior · style example</span></figcaption>
            </figure>
            <figure data-cat="work" className={filter === "all" || filter === "work" ? undefined : "hide"}>
              <img src="/images/image-07.webp" alt="Minimal small office workspace with a long shared desk and chairs" loading="lazy" />
              <figcaption><b>Team Workspace</b><span>Office interior · style example</span></figcaption>
            </figure>
            <figure data-cat="commercial" className={filter === "all" || filter === "commercial" ? undefined : "hide"}>
              <img src="/images/image-08.jpg" alt="Warmly lit restaurant interior with wooden tables, pendant lamps and a long counter" loading="lazy" />
              <figcaption><b>Restaurant Dining</b><span>Commercial interior · style example</span></figcaption>
            </figure>
            <figure data-cat="commercial" className={filter === "all" || filter === "commercial" ? undefined : "hide"}>
              <img src="/images/image-09.jpg" alt="Restaurant interior with patterned ceiling, booth seating and a display counter" loading="lazy" />
              <figcaption><b>Café &amp; Counter</b><span>Commercial interior · style example</span></figcaption>
            </figure>
            <figure data-cat="commercial" className={filter === "all" || filter === "commercial" ? undefined : "hide"}>
              <img src="/images/image-10.webp" alt="Bright retail showroom interior with display shelving and a seating area" loading="lazy" />
              <figcaption><b>Retail Showroom</b><span>Commercial interior · style example</span></figcaption>
            </figure>
            <figure data-cat="home" className={filter === "all" || filter === "home" ? undefined : "hide"}>
              <img src="/images/image-11.jpg" alt="Living room with a grey corner sofa, cushions and a green accent wall" loading="lazy" />
              <figcaption><b>Family Living Space</b><span>Home interior · style example</span></figcaption>
            </figure>
          </div>
          <p className="gal-note">Photos above are style examples of the spaces we design. See the studio's own projects, site visits and finished rooms on <a href="https://www.facebook.com/firstengineeringsolutions" target="_blank" rel="noopener" style={{fontWeight: '800', color: 'var(--blue)'}}>Facebook — @firstengineeringsolutions</a>.</p>

          <div className="wide-banner">
            <img src="/images/image-12.jpg" alt="" aria-hidden="true" />
            <div className="wb-in">
              <h3>Opening a restaurant, showroom or office?</h3>
              <p>Commercial spaces need design, furniture and execution to move together — that's exactly how we work. Call us before you sign the lease, and plan the space right from the start.</p>
              <div style={{marginTop: '18px', display: 'flex', flexWrap: 'wrap', gap: '11px'}}>
                <a className="btn btn-white btn-sm" href="tel:+8801673630006">Call 01673-630006</a>
                <a className="btn btn-outline-w btn-sm" href="#contact">Tell us about your space</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="process" style={{paddingTop: '0'}}>
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">How it works</p>
            <h2>From your idea to a finished space, in four steps</h2>
            <p className="bn" style={{fontWeight: '600'}}>আপনার ভাবনাকে বাস্তব রূপ দিতে শুরু হোক আজই — start today to give your idea real form.</p>
          </div>
          <div className="process-grid">
            <div className="step"><div className="num">01</div><h3>Talk &amp; site visit</h3><p>Call or message us with your space and what you need. We discuss your requirements and visit the site to measure and understand it.</p></div>
            <div className="step"><div className="num">02</div><h3>Design &amp; planning</h3><p>We prepare the design and layout plan for your rooms — how the space is divided, where everything goes, and how it will look and feel.</p></div>
            <div className="step"><div className="num">03</div><h3>Furniture &amp; materials</h3><p>Alpha Interior and Furniture builds the pieces your plan calls for, matched with the finishes and materials chosen in the design.</p></div>
            <div className="step"><div className="num">04</div><h3>Execution &amp; handover</h3><p>Our team executes the work on site under supervision, finishing the details and handing over a space that's ready to use.</p></div>
          </div>
        </div>
      </section>


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
              <p>House 29, Flat F1, Katasur, Mohammadpur, Dhaka-1207, Bangladesh. The studio is listed as always open — call <a href="tel:+8801673630006" style={{fontWeight: '800', color: 'var(--blue)'}}>+880 1673-630006</a> before you visit.</p>
            </details>
            <details>
              <summary>Do you only work in Dhaka?<span className="plus" aria-hidden="true">+</span></summary>
              <p>The studio is based in Dhaka and speaks to clients across Bangladesh. Call us with your location and project, and we'll tell you honestly how we can help.</p>
            </details>
            <details>
              <summary>How do I start a project?<span className="plus" aria-hidden="true">+</span></summary>
              <p>Call <a href="tel:+8801673630006" style={{fontWeight: '800', color: 'var(--blue)'}}>01673-630006</a>, email <a href="mailto:fastengineering08@gmail.com" style={{fontWeight: '800', color: 'var(--blue)'}}>fastengineering08@gmail.com</a>, message the <a href="https://www.facebook.com/firstengineeringsolutions" target="_blank" rel="noopener" style={{fontWeight: '800', color: 'var(--blue)'}}>Facebook page</a>, or use the consultation form below — it prepares your details as an email, ready to send.</p>
            </details>
          </div>
        </div>
      </section>


      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker">Contact</p>
            <h2>Let's talk about your space</h2>
            <p className="intro">One call is enough to start. Tell us whether it's a home, an office, a showroom or a restaurant — and what you'd like it to become.</p>
            <div className="c-rows">
              <div className="c-row">
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                <div><small>Call us — always open</small><a href="tel:+8801673630006">+880 1673-630006</a><p>Tap to call from your phone.</p></div>
                <button className="copy-btn" type="button" data-copy="+8801673630006" onClick={() => handleCopy("+8801673630006")}>{copied === "+8801673630006" ? "Copied \u2713" : "Copy"}</button>
              </div>
              <div className="c-row">
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></span>
                <div><small>Email</small><a href="mailto:fastengineering08@gmail.com">fastengineering08@gmail.com</a><p>As listed on our Facebook page.</p></div>
                <button className="copy-btn" type="button" data-copy="fastengineering08@gmail.com" onClick={() => handleCopy("fastengineering08@gmail.com")}>{copied === "fastengineering08@gmail.com" ? "Copied \u2713" : "Copy"}</button>
              </div>
              <div className="c-row">
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <div><small>Studio</small><b>House 29, Flat F1, Katasur</b><p>Mohammadpur, Dhaka-1207, Bangladesh</p></div>
              </div>
              <div className="c-row">
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></span>
                <div><small>Facebook · 8,000+ followers</small><a href="https://www.facebook.com/firstengineeringsolutions" target="_blank" rel="noopener">@firstengineeringsolutions</a><p>Latest projects, site visits and updates.</p></div>
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
                <a className="btn btn-ghost" href="tel:+8801673630006">Or call +880 1673-630006</a>
              </div>
              <p className="status" id="formStatus" role="status" aria-live="polite">{formStatus}</p>
              <p className="form-note">The button opens your email app with everything filled in — nothing is sent until you press send there.</p>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="wrap foot-in">
        <span>© 2026 First Engineering Architecture &amp; Interior Solutions · Alpha Interior — a concern of First Engineering</span>
        <span style={{display: 'flex', gap: '22px', flexWrap: 'wrap'}}>
          <a href="https://www.facebook.com/firstengineeringsolutions" target="_blank" rel="noopener">Facebook</a>
          <a href="tel:+8801673630006">+880 1673-630006</a>
          <a href="mailto:fastengineering08@gmail.com">Email us</a>
          <a href="#top">Back to top ↑</a>
        </span>
      </div>
    </footer>
    </>
  );
}
