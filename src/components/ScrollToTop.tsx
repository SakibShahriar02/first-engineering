import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route change, scroll to the top — unless the URL has a hash, in
 * which case scroll to the element with that id (after render, so the
 * target section exists). This preserves the old in-page anchor behaviour
 * (e.g. /#services from the Alpha page) under real routing.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
}
