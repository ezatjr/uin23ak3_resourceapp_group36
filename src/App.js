import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HTMLResources from './components/HTMLResources'; // Import HTMLResources
import CSSResources from './components/CSSResources';
import JavaScriptResources from './components/JavaScriptResources';
import ReactResources from './components/ReactResources';
import SanityResources from './components/SanityResources';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout><HTMLResources /></Layout>} />
        <Route path="/html" element={<Layout><HTMLResources /></Layout>} /> {/* Wrap HTMLResources with Layout */}
        <Route path="/css" element={<Layout><CSSResources /></Layout>} />
        <Route path="/javascript" element={<Layout><JavaScriptResources /></Layout>} />
        <Route path="/react" element={<Layout><ReactResources /></Layout>} />
        <Route path="/sanity" element={<Layout><SanityResources /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
