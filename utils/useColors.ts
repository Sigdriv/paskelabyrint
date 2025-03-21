import { useTheme } from '@mui/material';

export function useColors() {
  const { secondary } = useTheme().palette;

  return {
    link: secondary.dark,
  };
}
