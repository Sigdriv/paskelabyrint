import { FormControl, TextField } from "@mui/material";
import { FormLabel } from "./FormLabel";
import { useId, useRef } from "react";

interface Props {
  inputWidth?: "10rem" | "15rem" | "20rem" | "25rem" | "40rem" | "100%";
  label: string;
  required?: boolean;
  errorText?: string;
  shouldShowError?: boolean;
  multiline?: boolean;
  handleChange: (value: string) => void;
}

export function TextInput({
  inputWidth = "100%",
  label,
  required = false,
  errorText = "",
  shouldShowError = false,
  multiline = false,
  handleChange,
}: Props) {
  const maxWidth =
    inputWidth === "10rem" || inputWidth === "15rem" ? "20rem" : inputWidth;

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
      />
    </FormControl>
  );
}
