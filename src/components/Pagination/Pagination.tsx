import './Pagination.css';
import { IPagination } from '../../types/interfaces';
import { Context } from '../../context/context';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Pagination({ currentPage, allPage }: IPagination) {
  const { setCurrentPage, searchString } = useContext(Context);
  const [, setSearchParams] = useSearchParams();

  const handleClickPrevPage = () => {
    setCurrentPage(currentPage - 1);
    setSearchParams({
      name: searchString,
      page: `${currentPage - 1}`,
    });
  };

  const handleClickNextPage = () => {
    setCurrentPage(currentPage + 1);
    setSearchParams({
      name: searchString,
      page: `${currentPage + 1}`,
    });
  };

  return (
    <div className="pagination-section">
      <button
        className={`pagination-button ${
          currentPage === 1 && 'disabled-button'
        }`}
        onClick={handleClickPrevPage}
        disabled={currentPage === 1}
        data-testid="button-prev-page"
      >{`<`}</button>
      <h4 className="pagination-page">
        {currentPage} / {allPage ? allPage : currentPage}
      </h4>
      <button
        className={`pagination-button ${
          currentPage === allPage && 'disabled-button'
        }`}
        onClick={handleClickNextPage}
        disabled={currentPage === allPage}
        data-testid="button-next-page"
      >{`>`}</button>
    </div>
  );
}
