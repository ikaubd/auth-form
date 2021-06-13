import { FormikHelpers, useFormik } from 'formik';
import { useCallback } from 'react';
import * as Yup from 'yup';
import { AuthFormHandler, AuthFormI } from '../types';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This field should be email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
  rememberMe: Yup.boolean(),
});

export const useAuthForm = (): AuthFormHandler => {
  const handleSubmit = useCallback(
    (values: AuthFormI, actions: FormikHelpers<AuthFormI>) => {
      actions.resetForm();
    },
    []
  );

  const formik = useFormik<AuthFormI>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: true,
  });

  const handleGoogleSignIn = useCallback(() => {}, []);
  const handleMicrosoftSignIn = useCallback(() => {}, []);

  return {
    ...formik,
    handleGoogleSignIn,
    handleMicrosoftSignIn,
  };
};
