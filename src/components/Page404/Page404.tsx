import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import './Page404.scss';

function Page404() {
  return (
    <Grid className="page-404" justifyContent="center" direction="column" container>
      <Typography className="caption-page-404" gutterBottom variant="h2" component="h2" align="center">
        Page 404
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" align="center">
        Sorry, page not found
      </Typography>
      <Link align="center" variant="body2" underline="none" href="/">Back to main page</Link>
    </Grid>
  );
}

export default Page404;
