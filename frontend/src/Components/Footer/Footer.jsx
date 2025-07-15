import React from "react";
import "./Footer.css";

const FOOTER_LINKS = [
  { label: "FAQ", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Privacy", href: "#" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          &copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.
        </p>
        <ul className="footer__links">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label} className="footer__link-item">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
