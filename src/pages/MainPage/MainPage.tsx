import React from 'react';
import { Grid } from '@mui/material';
import TodoList from '../../components/TodoList/TodoList';
import PaginationElement from '../../components/PaginationElement/PaginationElement';
import Header from '../../components/Header/Header';
import './MainPage.scss';

function MainPage() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Header />
      <TodoList />
      <PaginationElement />
    </Grid>
  );
}

export default MainPage;
