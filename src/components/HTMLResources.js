import React from 'react'; //Importer react, noe som er nødvendig for å bruker react komponenter.
import resources from '../resources'; //Henter filen resources.

const HTMLResources = () => {
  const Resource = resources.find(resource => resource.category === 'HTML');

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
