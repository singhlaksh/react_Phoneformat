import React from 'react';
import { render } from '@testing-library/react';
import PhoneNumberForm from './Components/PhoneNumberForm';

test('renders the form component', () => {
  const { container } = render(<PhoneNumberForm />);
  expect(container).toBeInTheDocument();
});
