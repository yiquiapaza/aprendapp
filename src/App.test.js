import { render, screen } from '@testing-library/react';
import App from './App';

describe('App page', () => {
  test('renders App page', () => {
    render(<App />);
    expect(screen.getByText(/nd save to reload/)).toBeInTheDocument();
  });
});
