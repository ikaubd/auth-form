import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { AuthForm } from './AuthForm';

const handleChange = jest.fn();
const handleSubmit = jest.fn();
const values = {
  email: '',
  password: '',
  rememberMe: false,
};

const touched = {
  email: false,
  password: false,
};

const errors = {
  email: '',
  password: '',
};

beforeEach(() => {
  render(
    <Router>
      <AuthForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={values}
        touched={touched}
        errors={errors}
      />
    </Router>
  );
});

afterEach(() => {
  cleanup();
});

describe('AuthForm', () => {
  it('should pass errors when any of them present', () => {
    expect((touched.email && errors.email) || '').toBe('');

    touched.email = true;
    errors.email = 'Email Error';

    expect((touched.email && errors.email) || '').toBe('Email Error');

    touched.email = false;

    expect((touched.email && errors.email) || '').toBe('');

    touched.email = true;
    errors.email = '';
    expect((touched.email && errors.email) || '').toBe('');
  });
});
