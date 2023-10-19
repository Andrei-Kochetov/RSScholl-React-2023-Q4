import './App.css';
import { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';
import Seacrh from './components/Search/Search';
import Card from './components/Card/Card';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

interface IState {
  pokemons: Record<string, string>[];
  searchString: string;
  isLoading: boolean;
}

export default class App extends Component {
  LSSearchValue: string | null = localStorage.getItem('queryString');
  initSearchString: string = this.LSSearchValue ? this.LSSearchValue : '';

  state: IState = {
    pokemons: [],
    searchString: this.initSearchString,
    isLoading: true,
  };

  searchStringQuery(stringQuery: string) {
    const { isLoading, pokemons, searchString } = this.state;
    this.setState({ isLoading: true, pokemons, searchString });
    stringQuery = stringQuery.trim();
    localStorage.setItem('queryString', stringQuery);
    fetch(`https://swapi.dev/api/starships/?search=${stringQuery}`)
      .then((response) => response.json())
      .then((data) => this.setState({ pokemons: data.result, searchString, isLoading }))
      .finally(() => this.setState({ isLoading: false, pokemons, searchString }));
  }

  componentDidMount() {
    this.searchStringQuery(this.state.searchString);
  }

  render() {
    const { isLoading, pokemons, searchString } = this.state;

    return (
      <>
        <Seacrh
          searchString={searchString}


          // TODO 
          setSearchString={(e) => this.setState({ searchString: e, pokemons, isLoading })}
          searchStringQuery={this.searchStringQuery}
          //


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
}
// export default function App() {
//   const LSSearchValue: string | null = localStorage.getItem('queryString');
//   const initSearchString: string = LSSearchValue ? LSSearchValue : '';

//   const [pokemons, setPokemons] = useState<Record<string, string>[]>([]);
//   const [searchString, setSearchString] = useState(initSearchString);
//   const [isLoading, setisLoading] = useState(true);

//   function searchStringQuery(stringQuery: string) {
//     setisLoading(true);
//     stringQuery = stringQuery.trim();
//     localStorage.setItem('queryString', stringQuery);
//     fetch(`https://swapi.dev/api/starships/?search=${stringQuery}`)
//       .then((response) => response.json())
//       .then((data) => setPokemons(data.results))
//       .finally(() => setisLoading(false));
//   }

//   useEffect(() => {
//     searchStringQuery(searchString);
//   }, []);

//   return (
//     <>
//       <Seacrh
//         searchString={searchString}
//         setSearchString={setSearchString}
//         searchStringQuery={searchStringQuery}
//       ></Seacrh>
//       <ErrorBoundary>
//         <ErrorButton></ErrorButton>
//         <div className="cards-wrapper">
//           {isLoading && (
//             <ColorRing
//               visible={true}
//               height="200"
//               width="200"
//               ariaLabel="blocks-loading"
//               wrapperStyle={{}}
//               wrapperClass="blocks-wrapper"
//               colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//             />
//           )}
//           {!isLoading &&
//             pokemons.map((pokemon) => (
//               <Card
//                 name={pokemon.name}
//                 model={pokemon.model}
//                 manufacturer={pokemon.manufacturer}
//                 key={pokemon.created}
//               ></Card>
//             ))}
//         </div>
//       </ErrorBoundary>
//     </>
//   );
// }
