import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaForgotPassword } from '../../types/validationSchema';
import { IForgotPasswordForm } from '../../types/interfaces';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import { clearSuccessMessage, editPasswordUserQuery } from '../../bll/editPasswordUser/editPasswordUser.slice';
import { editPasswordUserSelector } from '../../bll/editPasswordUser/editPasswordUser.selector';
import './ForgotPasswordPage.scss';

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const
    {
      userPasswordIsLoading,
      userError,
      userSuccessMessage,
    } = useSelector(editPasswordUserSelector);

  const initialValues: IForgotPasswordForm = {
    email: '',
  };

  const onSubmitFormHandler = (values: IForgotPasswordForm) => {
    dispatch(editPasswordUserQuery(values));
  };

  useEffect(() => {
    dispatch(clearSuccessMessage());
  }, []);

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
          userError={userError}
          userSuccessMessage={userSuccessMessage}
          userPasswordIsLoading={userPasswordIsLoading}
        />
      )}
    </Formik>
  );
}
export default ForgotPasswordPage;
