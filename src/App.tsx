import './App.css';
import { Component } from 'react';
import Seacrh from './components/Search/Search';
import Card from './components/Card/Card';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

interface IState {
  cards: Record<string, string>[];
  searchString: string;
  isLoading: boolean;
}

export default class App extends Component {
  LSSearchValue: string | null = localStorage.getItem('queryString');
  initSearchString: string = this.LSSearchValue ? this.LSSearchValue : '';

  state: IState = {
    cards: [],
    searchString: this.initSearchString,
    isLoading: true,
  };

  searchStringQuery(stringQuery: string) {
    const { cards, searchString } = this.state;

    this.setState({ isLoading: true, cards, searchString });

    stringQuery = stringQuery.trim();
    localStorage.setItem('queryString', stringQuery);

    fetch(`https://swapi.dev/api/starships/?search=${stringQuery}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cards: data.results, searchString, isLoading: false });
      });
  }

  componentDidMount() {
    this.searchStringQuery(this.state.searchString);
  }

  bindSearchStringQuery = this.searchStringQuery.bind(this);
  bindSetState = this.setState.bind(this);

  render() {
    const { isLoading, cards, searchString } = this.state;
    return (
      <ErrorBoundary>
        <Seacrh
          searchString={searchString}
          setSearchString={(e) => this.bindSetState({ searchString: e, cards, isLoading })}
          searchStringQuery={this.bindSearchStringQuery}
          disabled={this.state.isLoading}
        ></Seacrh>

        <ErrorButton></ErrorButton>
        <div className="cards-wrapper">
          {isLoading && <Spinner></Spinner>}
          {!isLoading &&
            (cards.length ? (
              cards.map((card) => (
                <Card
                  name={card.name}
                  model={card.model}
                  manufacturer={card.manufacturer}
                  key={card.created}
                ></Card>
              ))
            ) : (
              <h3 className="title">Unfortunately, no suitable result was found</h3>
            ))}
        </div>
      </ErrorBoundary>
    );
  }
}
