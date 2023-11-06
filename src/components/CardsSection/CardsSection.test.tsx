import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsSection from './CardsSection';
import { Context } from '../../context';
import {
  mockCards,
  mockCardDescription,
  mockSearchString,
} from '../../mocks/mockData';

describe('Cards section component:', () => {
  const mockFn = vi.fn();

  test('displays 2 cards', () => {
    render(
      <Context.Provider
        value={{
          cards: mockCards,
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
    const renderCards = screen.getAllByAltText('image character');
    expect(renderCards.length).toBe(2);
  });

  test('an empty result message is displayed', () => {
    render(
      <Context.Provider
        value={{
          cards: [],
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
    expect(
      screen.getByText('Unfortunately, no suitable result was found')
    ).toBeInTheDocument();
  });
});
