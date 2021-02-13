import React from 'react';
import { render } from '@testing-library/react';
import App from './';

test('renders icons', () => {
  render(<App />);
  const [appElement] = window.document.getElementsByClassName('IconsContainer');
  expect(appElement).not.toBeUndefined();
});
