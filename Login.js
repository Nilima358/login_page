import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, Grid, Link, Paper, IconButton, InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';

const CenteredContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const AnimatedPaper = styled(Paper)({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  transition: 'transform 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;

    if (!email.match(emailRegex)) {
      setError('Enter a valid email address');
      return;
    }

    if (!password.match(passwordRegex)) {
      setError('Password should only contain numbers and special characters');
      return;
    }

    if (email === '' && password === '') {
      setError(true);
      return;
    }

    console.log('Logging in with:', email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <CenteredContainer component="main" maxWidth="xs">
        <CssBaseline />
        <AnimatedPaper elevation={5}>
          <Avatar style={{ backgroundColor: error ? '#4CAF50' : '#4CAF50' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form style={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            {error && (
              <Typography variant="body2" color="error" style={{ marginTop: '0.5rem' }}>
                {error}
              </Typography>
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              style={{ backgroundColor: error ? '#ffffff' : '#4CAF50', color: 'black', marginTop: '1rem' }}
              onClick={handleLogin}
              disabled={error !== ''}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end" style={{ marginTop: '1rem' }}>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </AnimatedPaper>
      </CenteredContainer>
    </div>
  );
};

export default LoginPage;
