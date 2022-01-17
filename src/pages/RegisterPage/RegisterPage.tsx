import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerQuery } from '../../bll/registerUser/registerUser.slice';
import { validationSchemaRegister } from '../../types/validationSchema';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { IRegisterForm } from '../../types/interfaces';
import './RegisterPage.scss';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: IRegisterForm = {
    username: '',
    email: '',
    password: '',
    checkPassword: '',
  };

  const onSubmitFormHandler = (values: IRegisterForm) => {
    dispatch(registerQuery(values));
    navigate('/login');
  };
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
        />
      )}
    </Formik>
  );
}
export default RegisterPage;
