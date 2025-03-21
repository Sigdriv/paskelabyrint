import { useId, useRef, useState } from 'react';

import { useColors } from '@/utils';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';

import { FormHelperText } from './FormHelperText';
import { FormLabel } from './FormLabel';
import { IconButton } from './IconButton';
import { Text } from './Text';

interface Props {
  inputWidth?: '10rem' | '15rem' | '20rem' | '25rem' | '40rem' | '100%';
  label: string;
  required?: boolean;
  errorText?: string;
  shouldShowError?: boolean;
  multiline?: boolean;
  handleChange: (value: string) => void;
  type: 'text' | 'password';
  value: string;
  helperText?: string;
  maxCharacters?: number;
}

export function TextInput({
  inputWidth = '100%',
  label,
  required = false,
  errorText = '',
  shouldShowError = false,
  multiline = false,
  handleChange,
  type = 'text',
  value,
  helperText = '',
  maxCharacters,
}: Props) {
  const { white } = useColors();
  const maxWidth =
    inputWidth === '10rem' || inputWidth === '15rem' ? '20rem' : inputWidth;

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const textFieldId = generatedId;
  const labelId = `${textFieldId}-label`;
  const helperTextId = `${textFieldId}-helper-text`;

  const showError = shouldShowError && !!errorText;

  return (
    <FormControl fullWidth sx={{ maxWidth }}>
      <FormLabel
        label={label}
        id={labelId}
        componentId={textFieldId}
        focusRefOnClick={inputRef}
        required={required}
        valid={errorText.length === 0}
      />

      <TextField
        error={showError}
        id={textFieldId}
        minRows={multiline ? 4 : undefined}
        multiline={multiline}
        inputRef={inputRef}
        required={required}
        onChange={({ target: { value } }) => handleChange(value)}
        sx={{
          width: inputWidth,
          borderRadius: '0.5rem',
          backgroundColor: white,
        }}
        type={type === 'password' && showPassword ? 'text' : type}
        value={value}
        variant="outlined"
        slotProps={{
          input: {
            endAdornment:
              type === 'password' ? (
                <InputAdornment position="end">
                  <IconButton
                    icon={showPassword ? VisibilityOff : Visibility}
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                    ariaLabel="Vis/skjul passord"
                  />
                </InputAdornment>
              ) : undefined,
          },
        }}
      />

      <Stack
        direction="row"
        justifyContent={
          helperText || showError
            ? multiline
              ? 'space-between'
              : 'flex-start'
            : 'flex-end'
        }
      >
        <FormHelperText
          id={helperTextId}
          showError={showError}
          text={showError ? errorText : helperText}
        />

        {multiline && maxCharacters && (
          <Box mt="3px" flexShrink="0">
            <Text
              color={value.length > maxCharacters ? 'errorDark' : 'primary'}
            >
              {value.length} / {maxCharacters}
            </Text>
          </Box>
        )}
      </Stack>
    </FormControl>
  );
}
