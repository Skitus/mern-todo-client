import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FilterForm from '../FilterForm/FilterForm';
import './Header.scss';

function Header() {
  return (
    <>
      <Grid container xs={12} md={12} lg={10} justifyContent="space-around" alignItems="center">
        <FilterForm />
      </Grid>
      <Grid container xs={12} md={12} lg={2} justifyContent="center">
        <Link className="create-new-todo-link" to="/create">
          <Button className="create-new-todo-button" variant="contained">Create new todo</Button>
        </Link>
      </Grid>
    </>
  );
}

export default Header;
