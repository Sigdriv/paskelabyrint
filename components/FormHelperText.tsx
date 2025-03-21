import { FormHelperText as MuiFormHelperText } from '@mui/material';

type FormHelperTextProps = {
  id: string;
  showError: boolean;
  text: string | undefined;
};

export function FormHelperText({ id, showError, text }: FormHelperTextProps) {
  return (
    !!text && (
      <MuiFormHelperText
        id={id}
        sx={{
          color: showError ? 'error' : '',
          ml: 0,
          fontSize: '1.125rem',
        }}
      >
        {text}
      </MuiFormHelperText>
    )
  );
}
