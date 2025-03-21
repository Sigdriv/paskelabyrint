import type { JSX } from '@emotion/react/jsx-runtime';
import { Paper } from '@mui/material';

interface Props {
  children: JSX.Element;
}

export function Card({ children }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: { xs: '0.5rem', sm: '2rem' },
        bgcolor: 'secondary.main',
        width: 'fit-content',
        minWidth: '20rem',
      }}
    >
      {children}
    </Paper>
  );
}
