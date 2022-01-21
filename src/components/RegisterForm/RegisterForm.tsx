import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './RegisterForm.scss';

function RegisterForm({ handleChange, handleSubmit, values, errors, isValid, userError }: any) {
  return (
    <Grid className="register-wrapper" container justifyContent="space-around">
      <Grid item xs={11} sm={11} md={10} lg={10} container justifyContent="center">
        <Typography variant="h4" component="h4">
          Register
        </Typography>
        <TextField
          className="username-input"
          id="username"
          name="username"
          onChange={handleChange('username')}
          value={values.username}
          label="User name"
          variant="standard"
        />

        {errors.username && (
        <Typography className="error" variant="h6" component="h2" align="center">
          {errors.username}
        </Typography>
        )}
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
        <Typography className="error" variant="h6" component="h2" align="center">
          {errors.email}
        </Typography>
        )}
        <TextField
          className="password-input"
          id="password"
          name="password"
          type="password"
          onChange={handleChange('password')}
          value={values.password}
          label="Password"
          variant="standard"
        />

        {errors.password && (
        <Typography className="error" variant="h6" component="h2" align="center">
          {errors.password}
        </Typography>
        )}

        <TextField
          className="check-password-input"
          id="checkPassword"
          name="checkPassword"
          type="password"
          onChange={handleChange('checkPassword')}
          value={values.checkPassword}
          label="Check password"
          variant="standard"
        />

        {errors.checkPassword && (
        <Typography className="error" variant="h6" component="h2" align="center">
          {errors.checkPassword}
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
              className="register-button"
              disabled={!isValid}
              type="submit"
              variant="contained"
              onClick={() => handleSubmit()}
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/login">
              <Button className="sign-in-button" type="submit" variant="contained">
                Sign in
              </Button>
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
export default RegisterForm;
