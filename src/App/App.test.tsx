import React from 'react';
import { render } from '@testing-library/react';
import App from './';

test('renders App and all children', () => {
  render(<App />);
  const appElement = window.document.getElementsByClassName('App')[0];
  expect(appElement).not.toBeUndefined();
});
