import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text: confidence is comical', () => {
  render(<App />);
  const linkElement = screen.getByText(/confidence is comical/i);
  expect(linkElement).toBeInTheDocument();
});
