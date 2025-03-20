import type { RefObject } from "react";
import { useId } from "react";

import { FormLabel as MuiFormLabel } from "@mui/material";
import "./FormLabel.css";

type FormLabelProps = {
  componentId?: string;
  cursor?: boolean;
  focusRefOnClick?: RefObject<HTMLInputElement | null>;
  id?: string;
  label: string;
  required: boolean;
  valid: boolean;
};

export function FormLabel({
  componentId,
  cursor = true,
  focusRefOnClick,
  id,
  label,
  required,
  valid,
}: FormLabelProps) {
  const generatedId = useId();
  const labelId = id ?? generatedId;

  const className = required
    ? valid
      ? "required"
      : "required-error"
    : undefined;

  const handleLabelClick = focusRefOnClick
    ? () => {
        focusRefOnClick.current?.focus();
      }
    : undefined;

  return (
    <MuiFormLabel
      className={className}
      htmlFor={componentId}
      id={labelId}
      sx={{
        cursor: cursor ? "pointer" : "default",
      }}
      onClick={handleLabelClick}
    >
      <strong>{label}</strong>
    </MuiFormLabel>
  );
}
