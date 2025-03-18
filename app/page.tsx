"use client";

import { ContentWrapper, Header1 } from "@/components";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Header1>Kor ska oss reis</Header1>

      <ContentWrapper>
        <Button variant="contained" onClick={() => signIn("google")}>
          Logg inn med Google
        </Button>
      </ContentWrapper>
    </div>
  );
}
