import React from 'react'; //Importer react, noe som er nødvendig for å bruker react komponenter.
import resources from '../resources'; //Henter filen resources.

const HTMLResources = () => {
  const htmlResources = resources.filter(resource => resource.category === 'html');

  return (
    <>
      <h2>HTML Resources</h2>
      <ul>
        {htmlResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
  
}

export default HTMLResources;
