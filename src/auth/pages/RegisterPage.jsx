import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item size={12} sx={{ mt: 2 }}>
            <TextField
              label="Ful name"
              type="text"
              placeholder="Full name"
              fullWidth
            />
          </Grid>

          <Grid item size={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@mail.com"
              fullWidth
            />
          </Grid>

          <Grid item size={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} size={12}>
            <Grid item size={12}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Typography sx={{ mr: 1 }}>Already has an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
