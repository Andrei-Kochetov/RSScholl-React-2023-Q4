import './Pagination.css';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { IPagination } from '../../types/interfaces';

export default function Pagination({ currentPage }: IPagination) {
  const [, setSearchParams] = useSearchParams();

  const searchString = useAppSelector((state) => state.mainPage.searchString);
  const allPage = useAppSelector((state) => state.mainPage.allPage);

  const handleClickPrevPage = () => {
    setSearchParams({
      name: searchString,
      page: `${currentPage - 1}`,
    });
  };

  const handleClickNextPage = () => {
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
