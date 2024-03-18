import React from 'react';
import resources from '../resources';

const HTMLResources = () => {
  const htmlResources = resources.find(resource => resource.category === 'CSS'); //resources array brukes for å finne ressursen som tilhører kstergorien CSS ved hjelp av .find

  return (
    <>
      <h2>{htmlResources.category}</h2> {/* Overskriften viser kategorien til ressursen */}
      <p>{htmlResources.text}</p> {/* P-tag som viser teksten til ressursen. */}

      <ul>
        {htmlResources.sources.map((source, index) => (
          <li key={index}><a href={source.url}>{source.title}</a></li>
        ))}
      </ul>
    </>
  );
}


export default HTMLResources;
