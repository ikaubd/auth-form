import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Input } from './Input';

const handleChange = jest.fn();

beforeEach(() => {
  render(
    <Input
      error="Error"
      onChange={handleChange}
      name="input"
      placeholder="Placeholder"
      className="className"
      type="text"
      label="label"
    />
  );
});

afterEach(() => {
  cleanup();
});

describe('Input', () => {
  it('should display an error if it is present', () => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('should call change handler when user types in', () => {
    const input = screen.getByPlaceholderText(/placeholder/i);
    fireEvent.change(input, {
      target: { value: 'input' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
