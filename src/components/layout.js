import * as React from "react";
import { Link } from "gatsby";
import {container,heading,navLinks,navLinkItem,navLinkText} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className = {navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </div>
  );
};

export default Layout;
