import './MainPage.css';
import ModalCard from '../../ModalCard/ModalCard';
import CardsSection from '../../CardsSection/CardsSection';
import ErrorButton from '../../ErrorBoundary/ErrorButton/ErrorButton';
import Pagination from '../../Pagination/Pagination';
import Seacrh from '../../Search/Search';
import { Context } from '../../../context/context';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ICardDescription,
  ICards,
  IClickedButtonFuturePage,
} from '../../../types/interfaces';
import * as constants from '../../../constants/constants';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const SearchValue: string | null = searchParams.get('name');
  const initSearchString: string = SearchValue ? SearchValue : '';
  const [searchString, setSearchString] = useState(initSearchString);

  const SearchPage: string | null = searchParams.get('page');
  const initSearchPage: string =
    SearchPage && +SearchPage > 0 ? SearchPage : '1';
  const [currentPage, setCurrentPage] = useState(+initSearchPage);

  const [cards, setCards] = useState<ICards>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [allPage, setAllPage] = useState(1);
  const [linkPrevPage, setLinkPrevPage] = useState('');
  const [linkNextPage, setLinkNextPage] = useState('');

  const [cardDescription, setCardDescription] =
    useState<ICardDescription | null>(null);
  const [modalActive, setModalActive] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);

  const [clickedButtonFuturePage, setClickedButtonFuturePage] =
    useState<IClickedButtonFuturePage>('');

  const deleteCardStringQuery = () => {
    setSearchParams({ name: searchString, page: `${currentPage}` });
  };

  useEffect(() => {
    const initialSearch = async () => {
      setIsLoading(true);

      const futureNumberPage =
        clickedButtonFuturePage === 'next'
          ? currentPage + 1
          : clickedButtonFuturePage === 'prev'
          ? currentPage - 1
          : currentPage;

      const futureLinkPage =
        clickedButtonFuturePage === 'next'
          ? linkNextPage
          : clickedButtonFuturePage === 'prev'
          ? linkPrevPage
          : `${constants.BASE_URL}${
              initSearchString
                ? `?name=${searchString}&page=${currentPage}`
                : `?page=${currentPage}`
            }`;

      setSearchParams({ name: searchString, page: `${futureNumberPage}` });

      try {
        const response = await fetch(futureLinkPage);
        const data = await response.json();

        setCards(data.results);
        setIsLoading(false);
        setCurrentPage(+futureNumberPage);
        setAllPage(data.info.pages);
        setLinkPrevPage(data.info.prev);
        setLinkNextPage(data.info.next);
        setClickedButtonFuturePage('');
      } catch (error) {
        console.log(error);
        setCards([]);
        setIsLoading(false);
      }
    };

    initialSearch();
  }, [clickedButtonFuturePage]);

  return (
    <Context.Provider
      value={{
        cards,
        searchString,
        cardDescription,
        setIsLoading,
        setCards,
        setCurrentPage,
        setAllPage,
        setLinkNextPage,
        setLinkPrevPage,
        setIsModalLoading,
        setCardDescription,
        setModalActive,
        setSearchString,
        setClickedButtonFuturePage,
      }}
    >
      <Seacrh disabled={isLoading}></Seacrh>
      <ErrorButton />
      <CardsSection isLoading={isLoading} currentPage={currentPage} />
      {!isLoading && Boolean(cards.length) && (
        <Pagination
          allPage={allPage}
          currentPage={currentPage}
          linkPrevPage={linkPrevPage}
          linkNextPage={linkNextPage}
        />
      )}
      <ModalCard
        modalActive={modalActive}
        isModalLoading={isModalLoading}
        deleteCardStringQuery={deleteCardStringQuery}
      />
    </Context.Provider>
  );
}
