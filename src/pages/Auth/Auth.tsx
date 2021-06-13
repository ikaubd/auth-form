import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import { AuthForm, ExternalSignIn } from './components';
import { useAuthForm } from './hooks/useAuthForm';
import { ROUTES } from '../../routing/AppRouting.utils';

export const Auth: React.FC = (): JSX.Element => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleGoogleSignIn,
    handleMicrosoftSignIn,
  } = useAuthForm();

  return (
    <main className="auth-page">
      <Card>
        <h1 className="auth-page__header">Log in</h1>
        <h3 className="auth-page__subheader">
          Don't have an account? <Link to={ROUTES.AUTH.path}>Sign up</Link>
        </h3>
        <ExternalSignIn
          handleMicrosoftSignIn={handleMicrosoftSignIn}
          handleGoogleSignIn={handleGoogleSignIn}
        />
        <div className="auth-page__divider">or</div>
        <AuthForm
          values={values}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Card>
    </main>
  );
};
