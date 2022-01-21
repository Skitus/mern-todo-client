import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { validationSchemaResetPassword } from '../../types/validationSchema';
import { IResetPasswordForm } from '../../types/interfaces';
import ResetPasswordForm from '../../components/ForgotPasswordForm/ResetPassword';
import { verifyPasswordUserQuery } from '../../bll/verifyPasswordUser/verifyPasswordUser.slice';
import { clearSuccessMessage, resetPasswordUserQuery } from '../../bll/resetPasswordUser/resetPasswordUser.slice';
import { verifyPasswordUserSelector } from '../../bll/verifyPasswordUser/verifyPasswordUser.selector';
import { resetPasswordUserSelector } from '../../bll/resetPasswordUser/resetPasswordUser.selector';
import './ResetPasswordPage.scss';

function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, token } = useParams<any>();
  const { userIsValidUrl, userError } = useSelector(verifyPasswordUserSelector);
  const userData = useSelector(resetPasswordUserSelector);

  const initialValues: IResetPasswordForm = {
    newPassword: '',
    checkPassword: '',
  };

  const onSubmitFormHandler = (values: IResetPasswordForm) => {
    dispatch(resetPasswordUserQuery({ values, id, token }));
  };

  useEffect(() => {
    dispatch(verifyPasswordUserQuery({ id, token }));
    if (userError.length !== 0 && !userIsValidUrl) {
      navigate('/page-not-found');
    }
  }, [userError, userIsValidUrl]);

  useEffect(() => {
    if (userData.userError.length === 0 && userData.userSuccessMessage) {
      dispatch(clearSuccessMessage());
      navigate('/login');
    }
  }, [userData.userError, userData.userSuccessMessage]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaResetPassword}
      onSubmit={(values: IResetPasswordForm) => onSubmitFormHandler(values)}
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
        />
      )}
    </Formik>
  );
}
export default ResetPasswordPage;
