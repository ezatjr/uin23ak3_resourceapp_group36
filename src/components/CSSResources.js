import React from 'react'; //Importer react, noe som er nødvendig for å bruker react komponenter.
import resources from '../resources'; //Henter filen resources.

const HTMLResources = () => {
  const cssResources = resources.filter(resource => resource.category === 'css');
  return (
    <>
      <h2>CSS Resources</h2>
      <ul>
        {cssResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}


export default HTMLResources;
