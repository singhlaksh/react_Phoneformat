import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PhoneNumberForm from '../Components/PhoneNumberForm';

test('renders the form component', () => {
  const { container } = render(<PhoneNumberForm />);
  expect(container).toBeInTheDocument();
});

test('initial phone value is empty', () => {
  const { getByPlaceholderText } = render(<PhoneNumberForm />);
  const phoneInput = getByPlaceholderText('(xxx) xxx-xxxx');
  expect(phoneInput.value).toBe('');
});

test('typing phone number updates input value', () => {   
  const { getByPlaceholderText } = render(<PhoneNumberForm />);
  const phoneInput = getByPlaceholderText('(xxx) xxx-xxxx');
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  expect(phoneInput.value).toBe('(123) 456-7890');
});

test('reset button clears phone input', () => {
  const { getByPlaceholderText, getByText } = render(<PhoneNumberForm />);
  const phoneInput = getByPlaceholderText('(xxx) xxx-xxxx');
  const resetButton = getByText('Reset');
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.click(resetButton);
  expect(phoneInput.value).toBe('');
});

