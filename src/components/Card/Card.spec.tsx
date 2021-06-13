import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { Card } from './Card';

const CardContent = () => <div>Card Content</div>;

beforeEach(() => {
  render(
    <Card>
      <CardContent />
    </Card>
  );
});

afterEach(() => {
  cleanup();
});

describe('Card', () => {
  it('should render properly', () => {
    expect(screen.getByText(/card content/i)).toBeInTheDocument();
  });
});
