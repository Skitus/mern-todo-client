import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './ForgotPasswordForm.scss';

function ResetPasswordForm({
  handleChange,
  handleSubmit,
  values,
  errors,
  isValid,
  userError,
}: any) {
  return (
    <Grid className="forgot-password-wrapper" container justifyContent="space-around">
      <Grid item xs={11} sm={11} md={10} lg={10} container justifyContent="center">
        <Typography variant="h4" component="h4">
          Forgot password
        </Typography>
        {/*        <TextField
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
        )} */}

        <TextField
          className="new-password-input"
          id="new-password"
          name="new-password"
          onChange={handleChange('newPassword')}
          value={values.newPassword}
          label="New password"
          variant="standard"
        />

        {errors.newPassword && (
        <Typography className="error" variant="h6" component="h2" align="center">
          {errors.newPassword}
        </Typography>
        )}

        <TextField
          className="check-password-input"
          id="checkPassword"
          name="checkPassword"
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
          {/*
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/register">
              <Button className="register-button"
              type="submit" variant="contained">Register</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/login">
              <Button className="sign-in-button"
              type="submit" variant="contained">
                Sign in
              </Button>
            </Link>
          </Grid> */}
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button
              className="new-password-button"
              type="submit"
              variant="contained"
              disabled={!isValid}
              onClick={() => handleSubmit()}
            >
              Reset password
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ResetPasswordForm;
