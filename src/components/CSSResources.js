import React from 'react'; //Importer react, noe som er nødvendig for å bruker react komponenter.
import resources from '../resources'; //Henter filen resources.

const HTMLResources = () => {
  const cssResources = resources.filter(resource => resource.category === 'css');  //resources array brukes for å finne ressursen som tilhører kstergorien CSS ved hjelp av .find
  return (
    <>
      <h2>CSS Resources</h2> {/* Overskriften viser kategorien til ressursen */}
      <ul>
          {/* Mapper gjennom arrayen. Sources skal inneholde informasjon om ulike kilder til ressurser */}
        {cssResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
         {/* For hver kilde, blir det generert listeelement. Key Index brukes for å gi hvert <li> en unik nøkkel basert på indeksen i arrayen */}
        {/* Inni hvert <li> er det også lagd en a href som er URL til kilden. */}
      </ul>
    </>
  );
}


export default HTMLResources;
