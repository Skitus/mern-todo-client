import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginQuery } from '../../bll/loginUser/loginUser.slice';
import { validationSchemaLogin } from '../../types/validationSchema';
import { ILoginForm } from '../../types/interfaces';
import LoginForm from '../../components/LoginForm/LoginForm';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';
import './LoginPage.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userError } = useSelector(loginUserSelector); // ref

  const initialValues: ILoginForm = {
    email: '',
    password: '',
  };

  const onSubmitFormHandler = (values: ILoginForm) => {
    dispatch(loginQuery(values));
    navigate('/');
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      onSubmit={(values: ILoginForm) => onSubmitFormHandler(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <LoginForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          isValid={isValid}
          userError={userError}
        />

      )}
    </Formik>
  );
}
export default LoginPage;
