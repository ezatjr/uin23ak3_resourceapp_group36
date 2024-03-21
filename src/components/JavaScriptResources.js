import React from 'react';
import resources from '../resources';

const HTMLResources = () => {
  const javascriptResources = resources.filter(resource => resource.category === 'javascript');
  return (
    <>
      <h2>JavaScript Resources</h2>
      <ul>
        {javascriptResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default HTMLResources;
