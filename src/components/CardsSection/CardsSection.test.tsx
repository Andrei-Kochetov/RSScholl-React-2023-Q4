import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsSection from './CardsSection';
import { Context } from '../../context/context';
import {
  mockCards,
  mockCardDescription,
  mockSearchString,
} from '../../mocks/mockData';

const mockFn = vi.fn();

const renderCardsSectionWithContext = (
  cardsValueContext: Record<string, string>[]
) => {
  return (
    <Context.Provider
      value={{
        cards: cardsValueContext,
        searchString: mockSearchString,
        cardDescription: mockCardDescription,
      }}
    >
      <CardsSection
        isLoading={false}
        changeStateModalActive={mockFn}
        getCardDescription={mockFn}
      />
    </Context.Provider>
  );
};

describe('Cards section component:', () => {
  test('displays 2 cards', () => {
    render(renderCardsSectionWithContext(mockCards));

    const renderCards = screen.getAllByTestId('card');

    expect(renderCards.length).toBe(2);
  });

  test('an empty result message is displayed', () => {
    render(renderCardsSectionWithContext([]));

    expect(
      screen.getByText('Unfortunately, no suitable result was found')
    ).toBeInTheDocument();
  });
});
