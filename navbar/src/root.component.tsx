import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./root.component.css";

export default function Root(): JSX.Element {
  return (
    <Router>
      <nav className="nav">
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/about-us">
          About us
        </Link>
        <Link className="link" to="/faq">
          FAQ
        </Link>
        <Link className="link" to="/chat">
          Chat
        </Link>
        <Link className="link" to="/sign-in">
          Sign In
        </Link>
      </nav>
    </Router>
  );
}
