import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="tab-container">
        <ul className="tab-menu">
          <li><Link to="/html">HTML</Link></li>
          <li><Link to="/css">CSS</Link></li>
          <li><Link to="/javascript">JavaScript</Link></li>
          <li><Link to="/react">React</Link></li>
          <li><Link to="/sanity">Sanity and headless CMS</Link></li>
        </ul>
      </div>
      <main>
        <div className="resource-details">
          {children} {/* Gjengi barnekomponenter her */}
        </div>
      </main>
    </div>
  );
}

export default Layout;
