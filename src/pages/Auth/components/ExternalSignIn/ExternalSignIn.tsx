import React from 'react';

import { Button } from '../../../../components';
import { ButtonType } from '../../../../types';
import { googleLogo, microsoftLogo } from '../../assets';

interface ExternalSignInProps {
  handleGoogleSignIn(): void;
  handleMicrosoftSignIn(): void;
}

export const ExternalSignIn: React.FC<ExternalSignInProps> = React.memo(
  ({
    handleGoogleSignIn,
    handleMicrosoftSignIn,
  }: ExternalSignInProps): JSX.Element => {
    return (
      <>
        <Button
          buttonType={ButtonType.EXTERNAL_SIGN_IN}
          icon={googleLogo}
          onClick={handleGoogleSignIn}
          className="auth-page__btn"
        >
          Continue with Google
        </Button>
        <Button
          buttonType={ButtonType.EXTERNAL_SIGN_IN}
          icon={microsoftLogo}
          onClick={handleMicrosoftSignIn}
          className="auth-page__btn"
        >
          Continue with Microsoft
        </Button>
      </>
    );
  }
);
