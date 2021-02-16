import React from 'react';
import { render } from '@testing-library/react';
import Patient from './index';

test('renders table of patients', () => {
  render(<Patient />);
  const [patientElement] = window.document.getElementsByClassName(
    'PatientTable'
  );
  expect(patientElement).not.toBeUndefined();
});
