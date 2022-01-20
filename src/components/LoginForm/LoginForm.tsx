import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm({ handleChange, handleSubmit, values, errors, isValid, userError }: any) {
  return (
    <Grid className="login-wrapper" container justifyContent="center">
      <Grid item xs={11} sm={11} md={10} lg={10}>
        <Typography variant="h4" component="h4" align="center">
          Login
        </Typography>
        <TextField
          className="email-input"
          id="email"
          name="email"
          onChange={handleChange('email')}
          value={values.email}
          label="Email"
          variant="standard"
        />

        {errors.email && (
        <Typography className="error" variant="h6" component="h6" align="center">
          {errors.email}
        </Typography>
        )}
        <TextField
          className="password-input"
          id="password"
          name="password"
          onChange={handleChange('password')}
          value={values.password}
          label="Password"
          variant="standard"
        />

        {errors.password && (
        <Typography className="error" variant="h6" component="h6" align="center">
          {errors.password}
        </Typography>
        )}
        {
            userError && (
            <Typography className="error" variant="h6" component="h6" align="center">
              {`Sorry some went wrong: ${userError}`}
            </Typography>
            )
        }
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button
              className="sign-in-button"
              disabled={!isValid}
              type="submit"
              variant="contained"
              onClick={() => handleSubmit()}
            >
              Sign in
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/register">
              <Button className="register-button" type="submit" variant="contained">Register</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/password-reset">
              <Button className="new-password-button" type="submit" variant="contained">Forgot password ?</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default LoginForm;
