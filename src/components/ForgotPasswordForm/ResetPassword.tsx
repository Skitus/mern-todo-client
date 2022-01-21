import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
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

        <TextField
          className="new-password-input"
          id="new-password"
          name="new-password"
          type="password"
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
          <Grid item xs={12} sm={12} md={3} lg={12}>
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
