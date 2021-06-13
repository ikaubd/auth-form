import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

const handleClick = jest.fn();
const type = 'submit';
const defaultType = 'button';
const className = 'className';
const buttonText = 'Button';

beforeEach(() => {
  render(
    <Button type={type} onClick={handleClick} className={className}>
      {buttonText}
    </Button>
  );
});

afterEach(() => {
  cleanup();
});

describe('Button', () => {
  it('should render text correctly', () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should have proper button type', () => {
    expect(screen.getByRole('button').getAttribute('type')).toBe(type);
  });

  it('should handle click correctly', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply extra className', () => {
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  it('should have the default type button if it is not set', () => {
    cleanup();
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    expect(screen.getByRole('button').getAttribute('type')).toBe(defaultType);
  });
});
