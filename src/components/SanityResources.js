import React from 'react';
import resources from '../resources';

const HTMLResources = () => {
  const headless_cms_Resources = resources.filter(resource => resource.category === 'headless-cms');
  return (
    <>
      <h2>Headless Cms Resources</h2>
      <ul>
        {headless_cms_Resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HTMLResources;
