import React, { useCallback, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearError, registerQuery } from '../../bll/registerUser/registerUser.slice';
import { validationSchemaRegister } from '../../types/validationSchema';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { IRegisterForm } from '../../types/interfaces';
import { registryUserSelector } from '../../bll/registerUser/registerUser.selector';
import './RegisterPage.scss';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: IRegisterForm = {
    username: '',
    email: '',
    password: '',
    checkPassword: '',
  };
  const { userIsLoading, userError } = useSelector(registryUserSelector);

  const onSubmitFormHandler = (values: IRegisterForm) => {
    dispatch(registerQuery(values));
  };

  useEffect(() => {
    if (userError === '' && userIsLoading === false) {
      navigate('/login');
    }
  }, [userIsLoading, userError]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaRegister}
      onSubmit={(values: IRegisterForm) => onSubmitFormHandler(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <RegisterForm
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
export default RegisterPage;
