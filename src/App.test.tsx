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
    expect(screen.getByText(/result: 0/i)).toBeInTheDocument();
  });

  test('should return the number itself for a single number string', () => {
    render(<App />);
    const input = screen.getByTestId('numbersInput');
    const calculateButton = screen.getByRole('button', {name: /calculate sum/i});

    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(calculateButton);
    expect(screen.getByText(/result: 1/i)).toBeInTheDocument();
  });

  test('should return the sum of two numbers separated by a comma', () => {
    render(<App />);
    const input = screen.getByTestId('numbersInput');
    const calculateButton = screen.getByRole('button', {name: /calculate sum/i});

    fireEvent.change(input, { target: { value: '1,5' } });
    fireEvent.click(calculateButton);
    expect(screen.getByText(/result: 6/i)).toBeInTheDocument();
  });

  test('should return the sum of multiple numbers separated by commas', () => {
    render(<App />);
    const input = screen.getByTestId('numbersInput');
    const calculateButton = screen.getByRole('button', {name: /calculate sum/i});

    fireEvent.change(input, { target: { value: '1\n2,3' } });
    fireEvent.click(calculateButton);
    expect(screen.getByText(/result: 6/i)).toBeInTheDocument();
  });

  test('should support custom delimiters', () => {
    render(<App />);
    const input = screen.getByTestId('numbersInput');
    const calculateButton = screen.getByRole('button', {name: /calculate sum/i});

    fireEvent.change(input, { target: { value: '//;\n1;2' } });
    fireEvent.click(calculateButton);
    expect(screen.getByText(/result: 3/i)).toBeInTheDocument();
  });


  test('should throw an exception for a single negative number', () => {
    render(<App />);
    const input = screen.getByTestId('numbersInput');
    const calculateButton = screen.getByRole('button', {name: /calculate sum/i});

    fireEvent.change(input, { target: { value: '1,-2,3' } });
    fireEvent.click(calculateButton);
    expect(screen.getByText(/Error: Negative numbers not allowed: -2/i)).toBeInTheDocument();
  });
});
