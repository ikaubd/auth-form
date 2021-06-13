import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { AuthFormHandler } from '../types';
import { useAuthForm } from './useAuthForm';

const hookData: AuthFormHandler = {} as AuthFormHandler;

beforeEach(() => {
  const MockForm: React.FC = () => {
    Object.assign(hookData, useAuthForm());
    return null;
  };

  render(<MockForm />);
});

afterEach(() => {
  cleanup();
});

describe('useAuthForm hook', () => {
  it('should clear inputs when submitting the form', async () => {
    await act(async () => {
      await hookData.setFieldValue('email', 'some@email.com');
    });
    await act(async () => {
      await hookData.setFieldValue('password', 'password');
    });
    await act(async () => {
      hookData.handleSubmit();
    });
    expect(hookData.values.email).toBe('');
    expect(hookData.values.password).toBe('');
  });

  it('should call external sign in functions correctly', () => {
    jest.spyOn(hookData, 'handleGoogleSignIn');
    jest.spyOn(hookData, 'handleMicrosoftSignIn');
    hookData.handleGoogleSignIn();
    hookData.handleMicrosoftSignIn();
    expect(hookData.handleGoogleSignIn).toHaveBeenCalledTimes(1);
    expect(hookData.handleMicrosoftSignIn).toHaveBeenCalledTimes(1);
    expect(hookData.handleGoogleSignIn).toReturnWith(undefined);
    expect(hookData.handleMicrosoftSignIn).toReturnWith(undefined);
  });
});
