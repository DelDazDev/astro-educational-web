import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container__navbar">
      <header>
        <img src="../../public/images/logo.png" />
        <nav className={open ? "open" : ""}>
          <ul>
            <li>
              <a onClick={() => setOpen(!open)} className="navLink" href="/">
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(!open)}
                className="navLink"
                href="/courses"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(!open)}
                className="navLink"
                href="/articles"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(!open)}
                className="navLink"
                href="/podcasts"
              >
                Podcasts
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(!open)}
                className="navLink"
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(!open)}
                className="navLink"
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="icon__header">
          <p onClick={() => setOpen(!open)} className="close__navMovil">
            ❌
          </p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
