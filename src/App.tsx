import './App.css';
import Seacrh from './components/Search/Search';
import Card from './components/Card/Card';
import { ColorRing } from 'react-loader-spinner';
//import { Component } from 'react';
import { useEffect, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

// interface IState {
//   searchString: string;
//   pokemons: Record<string,string>[];
// }

export default function App() {
  const [pokemons, setPokemons] = useState<Record<string, string>[]>([]);
  const LS: string | null = localStorage.getItem('queryString');
  const initSearchString: string = LS ? LS : '';
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

// export default class App extends Component  {
//   ls: string | null
//   initSearchString: string;
//   state: IState;
//   constructor(props: Record<string,string>){
//     super(props)
//     this.ls = localStorage.getItem('queryString');
//     this.initSearchString = this.ls ? this.ls : '';
//     this.state = {
//       pokemons: [],
//       searchString: this.initSearchString
//     }
//   }

//   handlePokemonsChange = (data: Record<string,string>[]) => {
//     this.setState({
//       pokemons: this.state.pokemons = data
//     });
//   };
//   handleStringQueryChange = (data: string) => {
//     this.setState({
//       searchString: this.state.searchString = data
//     });
//   };

//   render() {
//     return (
//           <>
//             <Seacrh
//               searchString={this.initSearchString}
//               setSearchString={this.handleStringQueryChange}
//               searchStringQuery={this.handleStringQueryChange}
//             ></Seacrh>
//             <div className="cards-wrapper">
//               {this.state.pokemons.map((pokemon) => (
//                 <Card
//                   name={pokemon.name}
//                   model={pokemon.model}
//                   manufacturer={pokemon.manufacturer}
//                   key={pokemon.created}
//                 ></Card>
//               ))}
//             </div>
//           </>
//         );
//   }
// }
