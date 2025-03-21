'use client';

import { useRouter } from 'next/navigation';

import { useThemeContext } from '@/app/ThemeContext';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { Button } from './Button';

export function NavBar() {
  const { toggleTheme } = useThemeContext();
  const router = useRouter().push;

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Button variant="text" onClick={() => router('/')}>
          Home
        </Button>
        <Button variant="text" onClick={() => router('/about')}>
          About
        </Button>
        <Button variant="text" onClick={() => router('/contact')}>
          Contact
        </Button>
        <Typography sx={{ flexGrow: 1 }} />
        <Button variant="text" onClick={() => router('/auth/login')}>
          Login
        </Button>
        <Button variant="text" onClick={() => router('/auth/signup')}>
          Sign Up
        </Button>
        <Button variant="text" onClick={toggleTheme}>
          Darkmode?
        </Button>
      </Toolbar>
    </AppBar>
  );
}
