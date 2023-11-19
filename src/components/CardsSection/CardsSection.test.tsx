import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsSection from './CardsSection';
import { mockCards } from '../../mocks/mockData';
import { BrowserRouter } from 'react-router-dom';

const renderCardsSection = () => {
  return (
    <BrowserRouter>
      <>
        <CardsSection />
      </>
    </BrowserRouter>
  );
};

describe('Cards section component:', () => {
  test('displays 2 cards', () => {
    render(renderCardsSection());

    const renderCards = screen.getAllByTestId('card');

    expect(renderCards.length).toBe(2);
  });

  test('an empty result message is displayed', () => {
    render(renderCardsSection());

    expect(
      screen.getByText('Unfortunately, no suitable result was found')
    ).toBeInTheDocument();
  });

  test('function "getCardDescription" currectly work without errors', async () => {
    render(renderCardsSection());
    vi.spyOn(global, 'fetch').mockReturnValue(new Promise(() => mockCards));
    const cards = screen.getAllByTestId('card');
    fireEvent.click(cards[0]);
  });
});
