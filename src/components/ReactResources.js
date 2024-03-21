import React from 'react';
import resources from '../resources';

const HTMLResources = () => {
  const reactResources = resources.filter(resource => resource.category === 'react');
  return (
    <>
      <h2>React Resources</h2>
      <ul>
        {reactResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HTMLResources;
