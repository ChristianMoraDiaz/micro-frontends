import React from "react";
import "./root.component.css";

export default function Root() {
  return (
    <nav className="nav">
      <a href="/" className="link">
        Home
      </a>
      <a href="/about-us" className="link">
        About us
      </a>
      <a href="/faq" className="link">
        FAQ
      </a>
      <a href="/sign-in" className="link">
        Sign In
      </a>
    </nav>
  );
}
