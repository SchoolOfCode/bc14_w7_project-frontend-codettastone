import { render, screen } from '@testing-library/react';
import NavScrollExample from '../Navbar/index';

test('renders the navigation bar with links and search bar', () => {
  render(<NavScrollExample />);

  const brandLink = screen.getByRole('link', { name: /codetta stone/i });
  expect(brandLink).toHaveAttribute('href', '/');

  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toHaveAttribute('href', '/');

  const learningResourcesDropdown = screen.getByRole('button', { name: /learning resources/i });
  expect(learningResourcesDropdown).toHaveAttribute('aria-expanded', 'false');

  const resource1Link = screen.getByRole('link', { name: /resource 1/i });
  expect(resource1Link).toHaveAttribute('href', '#action3');

  const resource2Link = screen.getByRole('link', { name: /resource 2/i });
  expect(resource2Link).toHaveAttribute('href', '#action4');

  const resource3Link = screen.getByRole('link', { name: /resource 3/i });
  expect(resource3Link).toHaveAttribute('href', '#action5');

  const registerLink = screen.getByRole('link', { name: /register/i });
  expect(registerLink).toHaveAttribute('href', '/register');

  const loginLink = screen.getByRole('link', { name: /log in/i });
  expect(loginLink).toHaveAttribute('href', '/login');

  const searchBar = screen.getByPlaceholderText(/search/i);
  expect(searchBar).toBeInTheDocument();
});
