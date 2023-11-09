import './Pagination.css';
import { IPaginationProps } from '../../types/interfaces';
import { Context } from '../../context/context';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Pagination({
  currentPage,
  allPage,
  linkNextPage,
  linkPrevPage,
}: IPaginationProps) {
  const {
    searchString,
    setIsLoading,
    setCards,
    setCurrentPage,
    setLinkNextPage,
    setLinkPrevPage,
  } = useContext(Context);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const movePage = async (stringFuturePage: 'next' | 'prev') => {
    setIsLoading(true);

    const pageFutureNumbers =
      stringFuturePage === 'next' ? currentPage + 1 : currentPage - 1;
    const pageFutureLink =
      stringFuturePage === 'next' ? linkNextPage : linkPrevPage;

    setSearchParams({ name: searchString, page: `${pageFutureNumbers}` });
    try {
      const response = await fetch(`${pageFutureLink}`);
      const data = await response.json();

      setCards(data.results);
      setIsLoading(false);
      setLinkPrevPage(data.info.prev);
      setLinkNextPage(data.info.next);
      setCurrentPage(pageFutureNumbers);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickPrevPage = () => {
    movePage('prev');
  };

  const handleClickNextPage = () => {
    movePage('next');
  };

  return (
    <div className="pagination-section">
      <button
        className={
          currentPage === 1
            ? 'pagination-button disabled-button'
            : 'pagination-button'
        }
        onClick={handleClickPrevPage}
        disabled={currentPage === 1}
      >{`<`}</button>
      <h4 className="pagination-page">
        {currentPage} / {allPage ? allPage : currentPage}
      </h4>
      <button
        className={
          currentPage === allPage
            ? 'pagination-button disabled-button'
            : 'pagination-button'
        }
        onClick={handleClickNextPage}
        disabled={currentPage === allPage}
      >{`>`}</button>
    </div>
  );
}
