import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalCard from './ModalCard';
import { useState } from 'react';

const mockFn = vi.fn(() => true);

const { result } = renderHook(() => useState(true));

const renderModalCard = () => {
  return (
    <>
      <ModalCard deleteCardStringQuery={mockFn} />
    </>
  );
};

describe('The detailed card:', () => {
  test('clicking the close button hides the component', () => {
    render(renderModalCard());

    expect(result.current[0]).toBe(true);
    fireEvent.click(screen.getByTestId('modal-close'));
    expect(result.current[0]).toBe(false);
  });

  test('loading indicator is displayed while fetching data', () => {
    render(renderModalCard());

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('component correctly displays data', () => {
    render(renderModalCard());

    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
    expect(screen.getByAltText('image character')).toBeInTheDocument();
  });
});
