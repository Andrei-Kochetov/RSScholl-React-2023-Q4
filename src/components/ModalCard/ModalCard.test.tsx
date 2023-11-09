// import { describe, expect, test, vi } from 'vitest';
// import { fireEvent, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { mockCardDescription, mockSearchString } from '../../mocks/mockData';
// import { Context } from '../../context/context';
// import ModalCard from './ModalCard';
// import { BrowserRouter } from 'react-router-dom';
// import MainPage from '../pages/MainPage/MainPage';

// const mockFn = vi.fn(() => true);

// const renderModalCard = (isModalLoading: boolean = false) => {
//   return (
//     <Context.Provider
//       value={{
//         cards: [],
//         searchString: mockSearchString,
//         cardDescription: mockCardDescription,
//       }}
//     >
//       <ModalCard
//         modalActive={true}
//         isModalLoading={isModalLoading}
//         deleteCardStringQuery={mockFn}
//       />
//     </Context.Provider>
//   );
// };

// describe('The detailed card:', () => {
//   test('loading indicator is displayed while fetching data', () => {
//     render(renderModalCard(true));

//     expect(screen.getByTestId('spinner')).toBeInTheDocument();
//   });

//   test('component correctly displays data', () => {
//     render(renderModalCard());

//     expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
//     expect(screen.getByText(/Alive/i)).toBeInTheDocument();
//     expect(screen.getByText(/Human/i)).toBeInTheDocument();
//     expect(screen.getByText(/Male/i)).toBeInTheDocument();
//     expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
//     expect(screen.getByAltText('image character')).toBeInTheDocument();
//   });

//   test('clicking the close button hides the component', () => {
//     render(
//       //   <BrowserRouter>
//       //     <MainPage></MainPage>
//       //   </BrowserRouter>
//       renderModalCard()
//     );
//     screen.debug();
//     fireEvent.click(screen.getByTestId('modal-close'));
//     screen.debug();

//     expect(screen.queryByTestId('modal-card-content')).not.toBeInTheDocument();
//   });
// });
