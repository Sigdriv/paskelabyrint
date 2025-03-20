"use client";

import Link from "next/link";

import { Header1, Stack, Text } from "@/components";
import { useColors } from "@/utils";
import { styled } from "@mui/material";

export default function NotFound() {
  const { link } = useColors();

  const StyledLink = styled(Link)({
    textUnderlineOffset: "6px",
    textDecorationColor: link,
    color: link,
    "&:hover": {
      textDecorationThickness: "3px",
      cursor: "pointer",
    },
  });

  return (
    <Stack justifyContent="center" alignItems="center">
      <Header1>404 - Side ikke funnet</Header1>

      <Text>Vi finner ikke siden du leter etter</Text>

      <StyledLink href="/">
        <Text>Gå til forsiden</Text>
      </StyledLink>
    </Stack>
  );
}
