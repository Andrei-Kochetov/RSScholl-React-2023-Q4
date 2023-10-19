import './App.css';
import { ColorRing } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import Seacrh from './components/Search/Search';
import Card from './components/Card/Card';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';


export default function App() {
  const LSSearchValue: string | null = localStorage.getItem('queryString');
  const initSearchString: string = LSSearchValue ? LSSearchValue : '';

  const [pokemons, setPokemons] = useState<Record<string, string>[]>([]);
  const [searchString, setSearchString] = useState(initSearchString);
  const [isLoading, setisLoading] = useState(true);

  function searchStringQuery(stringQuery: string) {
    setisLoading(true);
    stringQuery = stringQuery.trim();
    localStorage.setItem('queryString', stringQuery);
    fetch(`https://swapi.dev/api/starships/?search=${stringQuery}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .finally(() => setisLoading(false));
  }

  useEffect(() => {
    searchStringQuery(searchString);
  }, []);

  return (
    <>
      <Seacrh
        searchString={searchString}
        setSearchString={setSearchString}
        searchStringQuery={searchStringQuery}
      ></Seacrh>
      <ErrorBoundary>
        <ErrorButton></ErrorButton>
        <div className="cards-wrapper">
          {isLoading && (
            <ColorRing
              visible={true}
              height="200"
              width="200"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          )}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <Card
                name={pokemon.name}
                model={pokemon.model}
                manufacturer={pokemon.manufacturer}
                key={pokemon.created}
              ></Card>
            ))}
        </div>
      </ErrorBoundary>
    </>
  );
}
