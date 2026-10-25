export default function About() {
  return (
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
  );
}
