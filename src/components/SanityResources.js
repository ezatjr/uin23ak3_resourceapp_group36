import React from 'react';
import resources from '../resources';

const HTMLResources = () => {
  const Resource = resources.find(resource => resource.category === 'Sanity and headless CMS');

  return (
    <>
      <h2>{Resource.category}</h2>
      <p>{Resource.text}</p>
      <ul>
        {Resource.sources.map((source, index) => (
          <li key={index}><a href={source.url}>{source.title}</a></li>
        ))}
      </ul>
    </>
  );
}

export default HTMLResources;
