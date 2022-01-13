import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in text', () => {
  render(<App />);
  const textElement = screen.getByText(/Sign In/i);
  expect(textElement).toBeInTheDocument();
});
