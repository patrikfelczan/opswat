import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Articles/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header ', () => {
  render(<App />);
  const linkElement = screen.getByText(/User-Profile/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header ', () => {
  render(<App />);
  const linkElement = screen.getByText(/User-List/i);
  expect(linkElement).toBeInTheDocument();
});
