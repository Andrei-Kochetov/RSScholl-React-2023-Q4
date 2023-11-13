import './Pagination.css';
import { IPagination } from '../../types/interfaces';
import { Context } from '../../context/context';
import { useContext } from 'react';

export default function Pagination({
  currentPage,
  allPage,
  doChangeForUseEffect,
}: IPagination) {
  const { setClickedButtonFuturePage } = useContext(Context);

  const handleClickPrevPage = () => {
    setClickedButtonFuturePage('prev');
    doChangeForUseEffect();
  };

  const handleClickNextPage = () => {
    setClickedButtonFuturePage('next');
    doChangeForUseEffect();
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
        data-testid="button-prev-page"
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
        data-testid="button-next-page"
      >{`>`}</button>
    </div>
  );
}
