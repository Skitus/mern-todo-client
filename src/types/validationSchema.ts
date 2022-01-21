import * as yup from 'yup';

export const validationSchemaLogin = yup.object({
  email: yup
    .string()
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required'),
});

export const validationSchemaRegister = yup.object({
  email: yup
    .string()
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required'),
  username: yup
    .string()
    .required('User name is required'),
  checkPassword: yup.string().required('This field is required').when('password', {
    is: (val: string) => (!!(val && val.length > 0)),
    then: yup.string().oneOf(
      [yup.ref('password')],
      'Both password need to be the same',
    ),
  }),
});

export const validationSchemaForgotPassword = yup.object({
  email: yup
    .string()
    .required('Email is required'),
});

export const validationSchemaResetPassword = yup.object({
  newPassword: yup
    .string()
    .required('Password is required'),
  checkPassword: yup.string().required('This field is required').when('newPassword', {
    is: (val: string) => (!!(val && val.length > 0)),
    then: yup.string().oneOf(
      [yup.ref('newPassword')],
      'Both password need to be the same',
    ),
  }),
});

export const validationSchemaTodo = yup.object({
  title: yup
    .string()
    .required('Title is required'),
  year: yup.date().default(() => new Date()).required('Year is required'),
  isPublic: yup
    .boolean(),
  isComplete: yup
    .boolean(),
});
