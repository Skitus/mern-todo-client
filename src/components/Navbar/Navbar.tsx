import React from 'react';
import { Toolbar } from '@material-ui/core';
import {
  AppBar,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';
import { logout } from '../../bll/loginUser/loginUser.slice';
import './Navbar.scss';

function Navbar() {
  const dispatch = useDispatch();
  const { userToken, userName } = useSelector(loginUserSelector);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>
          {
            userToken
              ? (
                <>
                  <Typography variant="h6" component="h6">
                    {userName}
                  </Typography>
                  <Button sx={{ color: 'white' }} onClick={logoutHandler}>Logout</Button>
                </>
              )
              : (
                <>
                  <Button><Link className="sign-in-link" to="/login">Sign in</Link></Button>
                  <Button><Link className="register-link" to="/register">Register</Link></Button>
                </>
              )
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
