import type { MouseEventHandler, ReactNode } from "react";

import { Box, LinearProgress } from "@mui/material";
import MuiButton from "@mui/material/Button";

export type ButtonWidth =
  | "5rem"
  | "10rem"
  | "15rem"
  | "20rem"
  | "100%"
  | "auto";

export interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  width?: ButtonWidth;
  href?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  ariaLabel?: string;
}

export function Button({
  variant = "outlined",
  width = "100%",
  isLoading = false,
  onClick,
  children,
  ariaLabel,
}: ButtonProps) {
  return (
    <Box display="inline-flex" flexDirection="column" width={width}>
      <MuiButton
        variant={variant}
        disabled={isLoading}
        onClick={onClick}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label={ariaLabel}
        sx={{
          backgroundColor:
            variant === "outlined" ? "primary.contrastText" : undefined,
          borderWidth:
            variant === "outlined"
              ? "0.15rem"
              : variant === "contained"
                ? "0.1rem"
                : undefined,
          borderColor: "primary.main",
          "&:hover": {
            border: variant === "outlined" ? "0.15rem solid" : undefined,
          },
          width,
        }}
      >
        {children}
      </MuiButton>
      {isLoading && (
        <LinearProgress
          sx={{ mt: "-4px", h: "4px", borderRadius: " 0 0 4px 4px", width }}
        />
      )}
    </Box>
  );
}
