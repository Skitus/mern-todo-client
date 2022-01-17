import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validationSchemaForgotPassword } from '../../types/validationSchema';
import { IForgotPasswordForm } from '../../types/interfaces';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import { editPasswordUserQuery } from '../../bll/editPasswordUser/editPasswordUser.slice';
import { editPasswordUserSelector } from '../../bll/editPasswordUser/editPasswordUser.selector';
import './ForgotPasswordPage.scss';

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userPasswordIsLoading, userErrors } = useSelector(editPasswordUserSelector);

  const initialValues: IForgotPasswordForm = {
    email: '',
    newPassword: '',
    checkPassword: '',
  };

  const onSubmitFormHandler = (values: IForgotPasswordForm) => {
    dispatch(editPasswordUserQuery(values));
    if (!userPasswordIsLoading) {
      navigate('/');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaForgotPassword}
      onSubmit={(values: IForgotPasswordForm) => onSubmitFormHandler(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <ForgotPasswordForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          isValid={isValid}
          userErrors={userErrors}
        />
      )}
    </Formik>
  );
}
export default ForgotPasswordPage;
