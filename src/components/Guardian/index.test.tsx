import React from 'react';
import { render } from '@testing-library/react';
import Guardian from './index';

test('renders table of guardians', () => {
  render(<Guardian />);
  const [guardianElement] = window.document.getElementsByClassName(
    'GuardianTable'
  );
  expect(guardianElement).not.toBeUndefined();
});
