import { useTheme } from '@mui/material';

export function useColors() {
  const { secondary, common } = useTheme().palette;

  return {
    link: secondary.dark,
    white: common.white,
  };
}
