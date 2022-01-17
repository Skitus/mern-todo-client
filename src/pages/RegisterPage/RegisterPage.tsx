import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, registerQuery } from '../../bll/registerUser/registerUser.slice';
import { validationSchemaRegister } from '../../types/validationSchema';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { IRegisterForm } from '../../types/interfaces';
import { registryUserSelector } from '../../bll/registerUser/registerUser.selector';
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
  const { userIsLoading, userError } = useSelector(registryUserSelector);
  const userData = useSelector(registryUserSelector);
  console.log('userData from register', userData);

  const onSubmitFormHandler = (values: IRegisterForm) => {
    dispatch(clearErrors());
    dispatch(registerQuery(values));
    if (userError === '' && userIsLoading === false) {
      console.log('userData.userError have to equal "" ', userError);
      console.log('!userData.userIsLoading have to equal false', userIsLoading);
      navigate('/login');
    }
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
          userError={userError}
        />
      )}
    </Formik>
  );
}
export default RegisterPage;
