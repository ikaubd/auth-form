import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';

export interface AuthFormI {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthFormHandler {
  handleGoogleSignIn(): void;
  handleMicrosoftSignIn(): void;
  values: AuthFormI;
  handleChange(e: string | React.ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e?: React.FormEvent<HTMLFormElement> | undefined): void;
  errors: FormikErrors<AuthFormI>;
  touched: FormikTouched<AuthFormI>;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<AuthFormI>> | Promise<void>;
}
