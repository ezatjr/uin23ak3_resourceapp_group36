import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="tab-container">
        <ul className="tab-menu">
          <li className={location.pathname === "/html" ? "active" : ""}><Link to="/html">HTML</Link></li>
          <li className={location.pathname === "/css" ? "active" : ""}><Link to="/css">CSS</Link></li>
          <li className={location.pathname === "/javascript" ? "active" : ""}><Link to="/javascript">JavaScript</Link></li>
          <li className={location.pathname === "/react" ? "active" : ""}><Link to="/react">React</Link></li>
          <li className={location.pathname === "/sanity" ? "active" : ""}><Link to="/sanity">Sanity and headless CMS</Link></li>
        </ul>
      </div>
      <main>
        <div className="resource-details">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
