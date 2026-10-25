import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { contact } from "../data/site";

const sectionLinks = [
  { to: "/#about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#work", label: "Spaces" },
  { to: "/#process", label: "Process" },
  { to: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function handleBrandClick() {
    setMenuOpen(false);
    // Link to "/" does not re-run ScrollToTop when already on home,
    // so scroll to the top explicitly in that case.
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="brand" to="/" aria-label="First Engineering — home" onClick={handleBrandClick}>
          <span className="mark" aria-hidden="true">F<em>E</em></span>
          <span className="brand-text">
            <strong>First Engineering</strong>
            <span>Architecture &amp; Interior Solutions</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {sectionLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link to="/alpha" onClick={() => setMenuOpen(false)}>Businesses</Link>
          <a className="btn btn-blue btn-sm" href={`tel:${contact.phoneTel}`}>Call {contact.phoneDisplay}</a>
        </nav>
        <button className="menu-btn" id="menuBtn" aria-expanded={menuOpen} aria-controls="mobileMenu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((v) => !v)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
      <div className={`wrap mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        {sectionLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
        ))}
        <Link to="/alpha" onClick={() => setMenuOpen(false)}>Businesses</Link>
        <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
