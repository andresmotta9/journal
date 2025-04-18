import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import {
  startGoogleSignIn,
  startLoginWithemailPassword,
} from '../../store/auth';

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithemailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} size={12}>
            <Grid container size={12} sx={{ mt: 1 }}>
              <Grid item size={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
              >
                Login
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
