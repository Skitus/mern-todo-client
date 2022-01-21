import React from 'react';
import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './ForgotPasswordForm.scss';

function ForgotPasswordForm({
  handleChange,
  handleSubmit,
  values,
  errors,
  isValid,
  userError,
  userSuccessMessage,
  userPasswordIsLoading,
}: any) {
  return (
    <Grid className="forgot-password-wrapper" container justifyContent="space-around">
      <Grid item xs={11} sm={11} md={10} lg={10} container justifyContent="center">
        <Typography variant="h4" component="h4">
          Forgot password
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
        <Typography className="error" variant="h6" component="h2" align="center">
          {errors.email}
        </Typography>
        )}

        {
            userError && (
            <Typography className="error" variant="h6" component="h6" align="center">
              {`Sorry some went wrong: ${userError}`}
            </Typography>
            )
        }
        {
          userPasswordIsLoading
          && <CircularProgress color="secondary" />
        }
        {
          userSuccessMessage && (
          <Typography className="success" variant="h6" component="h6" align="center">
            {userSuccessMessage}
          </Typography>
          )
        }

        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/register">
              <Button className="register-button" type="submit" variant="contained">Register</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/login">
              <Button className="sign-in-button" type="submit" variant="contained">
                Sign in
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button
              className="new-password-button"
              type="submit"
              variant="contained"
              disabled={!isValid || Boolean(userSuccessMessage)}
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

export default ForgotPasswordForm;
