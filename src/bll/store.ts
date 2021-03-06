import { configureStore } from '@reduxjs/toolkit';
import listOfTodos from '../bll/listOfTodos/listOfTodos.slice';
import deleteTodo from './deleteTodo/deleteTodo.slice';
import createTodo from './createTodo/createTodo.slice';
import registerUser from './registerUser/registerUser.slice';
import loginUser from './loginUser/loginUser.slice';
import editPasswordUser from './editPasswordUser/editPasswordUser.slice';
import resetPasswordUser from './resetPasswordUser/resetPasswordUser.slice';
import verifyPasswordUser from './verifyPasswordUser/verifyPasswordUser.slice';

export const store = configureStore({
  reducer: {
    listOfTodos,
    deleteTodo,
    createTodo,
    registerUser,
    loginUser,
    editPasswordUser,
    resetPasswordUser,
    verifyPasswordUser,
  },
});

export default store;
