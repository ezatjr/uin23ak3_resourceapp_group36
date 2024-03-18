import React from 'react'; //Importer react, noe som er nødvendig for å bruker react komponenter.
import resources from '../resources'; //Henter filen resources.

const HTMLResources = () => {
  const htmlResources = resources.find(resource => resource.category === 'HTML'); //sammer som CSS men den finner kategorien HTML ved hjelp av find, deretter blir den lagret i html variabelen.

  return (
    <>
      <h2>{htmlResources.category}</h2> 
      <p>{htmlResources.text}</p>
      <ul>
        {htmlResources.sources.map((source, index) => (
      {htmlResources.sources.map((source, index) => (
          <li key={index}><a href={source.url}>{source.title}</a></li>
        ))}
      </ul>
    </>
    </> 
  );
}

export default HTMLResources;
