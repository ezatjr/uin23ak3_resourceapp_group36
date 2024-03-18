import React from 'react'; //Importer react, noe som er nødvendig for å bruker react komponenter.
import resources from '../resources'; //Henter filen resources.

const HTMLResources = () => {
  const Resource = resources.find(resource => resource.category === 'CSS'); //resources array brukes for å finne ressursen som tilhører kstergorien CSS ved hjelp av .find

  return (
    <>
      <h2>{Resource.category}</h2> {/* Overskriften viser kategorien til ressursen */}
      <p>{Resource.text}</p> {/* P-tag som viser teksten til ressursen. */}

      <ul>
        {/* Mapper gjennom arrayen. Sources skal inneholde informasjon om ulike kilder til ressurser */}
        {Resource.sources.map((source, index) => ( 
          <li key={index}><a href={source.url}>{source.title}</a></li>
        ))}
        {/* For hver kilde, blir det generert listeelement. Key Index brukes for å gi hvert <li> en unik nøkkel basert på indeksen i arrayen */}
        {/* Inni hvert <li> er det også lagd en a href som er URL til kilden. */}
      </ul>
    </>
  );
}


export default HTMLResources;
