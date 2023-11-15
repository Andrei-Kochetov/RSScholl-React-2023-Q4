import './Pagination.css';
import { useSearchParams } from 'react-router-dom';
import { changeCurrentPage } from '../../store/mainPageSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function Pagination() {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const searchString = useAppSelector((state) => state.mainPage.searchString);
  const allPage = useAppSelector((state) => state.mainPage.allPage);
  const currentPage = useAppSelector((state) => state.mainPage.currentPage);

  const handleClickPrevPage = () => {
    dispatch(changeCurrentPage(currentPage - 1));
    setSearchParams({
      name: searchString,
      page: `${currentPage - 1}`,
    });
  };

  const handleClickNextPage = () => {
    dispatch(changeCurrentPage(currentPage + 1));
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
