import type { JSX } from '@emotion/react/jsx-runtime';
import { Paper } from '@mui/material';

interface Props {
  children: JSX.Element;
}

export function ContentWrapper({ children }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: { xs: '0.5rem', sm: '2rem' },
        bgcolor: 'secondary.main',
      }}
    >
      {children}
    </Paper>
  );
}
