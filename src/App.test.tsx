import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('StringCalculator add function', () => {
  test('should return 0 for an empty string', () => {
    render(<App/>);
    const input = screen.getByTestId('numbersInput');
    const calculateButton = screen.getByRole('button', {name: /calculate sum/i});

    fireEvent.change(input, {target: {value: ''}});
    fireEvent.click(calculateButton);
    expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
  });
});
