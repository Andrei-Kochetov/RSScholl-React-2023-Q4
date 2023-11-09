// import { describe, expect, test, vi } from 'vitest';
// import { fireEvent, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Card from './Card';
// import {
//   mockCardDescription,
//   mockCards /* , mockGetCardDescription */,
//   mockSearchString,
// } from '../../../mocks/mockData';
// import App from '../../App/App';
// import { BrowserRouter } from 'react-router-dom';
// import MainPage from '../../pages/MainPage/MainPage';
// import { Context } from '../../../context/context';
// // import { setModalActive } from '../pages/MainPage/MainPage';
// // import { useState } from 'react';

// export function mockGetCardDescription() {
//   fetch(`https://rickandmortyapi.com/api/character/1`).then((response) => {
//     if (!response.ok) {
//       throw new Error('Not found results');
//     } else {
//       return response.json();
//     }
//   });
// }
// const mockFn = vi.fn(() => true);
// const onClick = vi.fn(mockGetCardDescription);

// const renderCard = () => {
//   return (
//     <Card
//       img={mockCards[0].image}
//       name={mockCards[0].name}
//       species={mockCards[0].species}
//       gender={mockCards[0].gender}
//       status={mockCards[0].status}
//       key={mockCards[0].id}
//       id={mockCards[0].id}
//       setModalActive={mockFn}
//       getCardDescription={onClick}
//     ></Card>
//   );
// };

// describe('The card component:', () => {
//   test('renders the relevant card data', () => {
//     render(renderCard());
//     expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
//     expect(screen.getByText(/Alive/i)).toBeInTheDocument();
//     expect(screen.getByText(/Human/i)).toBeInTheDocument();
//     expect(screen.getByText(/Male/i)).toBeInTheDocument();
//     expect(screen.getByAltText('image character')).toBeInTheDocument();
//   });

//   // test('clicking on a card opens a detailed card component', async () => {
//   //   vi.spyOn(global, 'fetch').mockReturnValue(new Promise(() => mockCards));

//   //   render(
//   //     <BrowserRouter>
//   //       <Context.Provider
//   //         value={{
//   //           cards: mockCards,
//   //           searchString: mockSearchString,
//   //           cardDescription: mockCardDescription,
//   //         }}
//   //       >
//   //         <MainPage setIsModalLoading={mockFn} />
//   //       </Context.Provider>
//   //     </BrowserRouter>
//   //   );
//   //   screen.debug();
//   //   vi.spyOn(global, 'fetch').mockReturnValue(new Promise(() => mockCards[0]));

//   //   fireEvent.click(screen.getByTestId('card'));
//   //   const modalCard = await screen.findByTestId('modal-card');
//   //   expect(modalCard).toBeInTheDocument();
//   // });

//   test('clicking triggers an additional API call to fetch detailed information', () => {
//     const spyFetch = vi.spyOn(global, 'fetch');

//     render(renderCard());

//     fireEvent.click(screen.getByTestId('card'));
//     expect(spyFetch).toBeCalledTimes(1);
//   });
// });
