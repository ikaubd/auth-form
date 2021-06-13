import { FormikErrors, FormikTouched } from 'formik';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '../../../../components';
import { ROUTES } from '../../../../routing/AppRouting.utils';
import { AuthFormI } from '../../types';

interface AuthFormProps {
  onSubmit(): void;
  values: AuthFormI;
  onChange(e: string | React.ChangeEvent<HTMLInputElement>): void;
  errors: FormikErrors<AuthFormI>;
  touched: FormikTouched<AuthFormI>;
}

export const AuthForm: React.FC<AuthFormProps> = React.memo(
  ({
    onSubmit,
    values,
    onChange,
    errors,
    touched,
  }: AuthFormProps): JSX.Element => {
    const displayedErrors = useMemo(
      () => ({
        email: (touched.email && errors.email) || '',
        password: (touched.password && errors.password) || '',
      }),
      [touched, errors]
    );

    return (
      <form className="auth-page__form" onSubmit={onSubmit}>
        <Input
          error={displayedErrors.email}
          value={values.email}
          onChange={onChange}
          name="email"
          placeholder="Email"
          className="auth-page__form-input"
          type="email"
        />
        <Input
          error={displayedErrors.password}
          value={values.password}
          onChange={onChange}
          name="password"
          placeholder="Password"
          className="auth-page__form-input"
          type="password"
        />
        <Link className="auth-page__form-forgot-password" to={ROUTES.AUTH.path}>
          Forgot password?
        </Link>
        <Input
          checked={values.rememberMe}
          onChange={onChange}
          name="rememberMe"
          type="checkbox"
          className="auth-page__form-checkbox"
          label="Remember me"
        />
        <Button className="auth-page__form-submit" type="submit">
          Continue
        </Button>
      </form>
    );
  }
);
