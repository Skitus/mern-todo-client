import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage/MainPage';
import TodoFormPage from './pages/TodoFormPage/TodoFormPage';
import Register from './pages/RegisterPage/RegisterPage';
import Login from './pages/LoginPage/LoginPage';
import { loginUserSelector } from './bll/loginUser/loginUser.selector';
import Page404 from './components/Page404/Page404';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';

function Routers() {
  const { userToken } = useSelector(loginUserSelector);

  return (
    userToken
      ? (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create" element={<TodoFormPage />} />
          <Route path="/update" element={<TodoFormPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )
      : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<ForgotPasswordPage />} />
          <Route path="/password-reset/:id/:token" element={<ResetPasswordPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )
  );
}

export default Routers;
