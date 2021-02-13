import React from 'react';
import { render } from '@testing-library/react';
import App from './';

test('renders icons', () => {
  render(<App />);
  const appElement = window.document.getElementsByClassName(
    'IconsContainer'
  )[0];
  expect(appElement).not.toBeUndefined();
});
