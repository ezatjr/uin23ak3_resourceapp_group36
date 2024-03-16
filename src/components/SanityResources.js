import React from 'react';
import resources from '../resources';

const HTMLResources = () => {
  const htmlResources = resources.find(resource => resource.category === 'Sanity and headless CMS');

  return (
    <>
      <h2>{htmlResources.category}</h2>
      <p>{htmlResources.text}</p>
      <ul>
        {htmlResources.sources.map((source, index) => (
          <li key={index}><a href={source.url}>{source.title}</a></li>
        ))}
      </ul>
    </>
  );
}

export default HTMLResources;
