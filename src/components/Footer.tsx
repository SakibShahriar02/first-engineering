import { Link } from "react-router-dom";
import { contact } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-in">
        <span>© 2026 First Engineering Architecture &amp; Interior Solutions · Alpha Interior — a concern of First Engineering</span>
        <span style={{display: 'flex', gap: '22px', flexWrap: 'wrap'}}>
          <Link to="/alpha">Businesses</Link>
          <a href={contact.facebookUrl} target="_blank" rel="noopener">Facebook</a>
          <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>Email us</a>
          <Link to="/#top">Back to top ↑</Link>
        </span>
      </div>
    </footer>
  );
}
