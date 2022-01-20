import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { validationSchemaForgotPassword } from '../../types/validationSchema';
import { IForgotPasswordForm } from '../../types/interfaces';
import './ResetPasswordPage.scss';
import ResetPasswordForm from '../../components/ForgotPasswordForm/ResetPassword';
import { verifyPasswordUserQuery } from '../../bll/verifyPasswordUser/verifyPasswordUser.slice';

function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, token } = useParams<any>();
  /*  const
    { userPasswordIsLoading,
      userError,
      isUserChangePassword,
    } = useSelector(editPasswordUserSelector); */

  const initialValues: IForgotPasswordForm = {
    email: '',
    newPassword: '',
    checkPassword: '',
  };

  const onSubmitFormHandler = (values: IForgotPasswordForm) => {
    /*    dispatch(editPasswordUserQuery(values)); */
  };

  useEffect(() => {
    dispatch(verifyPasswordUserQuery({ id, token }));
    /*    if (userError === '' && userPasswordIsLoading
    === false && isUserChangePassword === true) {
      dispatch(clearIsUserFlag());
      navigate('/login');
    } */
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
        <ResetPasswordForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          isValid={isValid}
/*          userError={userError} */
        />
      )}
    </Formik>
  );
}
export default ResetPasswordPage;
