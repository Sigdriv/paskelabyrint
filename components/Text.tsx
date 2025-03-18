import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  bold?: boolean;
}

export function Text({ align = "left", bold = false, children }: Props) {
  return (
    <Typography
      variant="body1"
      textAlign={align}
      maxWidth="75ch"
      whiteSpace="pre-wrap"
      lineHeight={"1.6"}
      fontSize={"1.25rem"}
      sx={{
        wordBreak: "break-word",
        wordWrap: "break-word",
      }}
    >
      {bold ? <strong>{children}</strong> : children}
    </Typography>
  );
}
