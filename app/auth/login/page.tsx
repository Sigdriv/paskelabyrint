"use client";

import { useGoogleSignin } from "@/api/hooks";
import {
  Button,
  ContentWrapper,
  Header1,
  Stack,
  TextInput,
} from "@/components";
import { useState } from "react";

export default function Page() {
  const { signinWithGoogle, isSigningIn } = useGoogleSignin();
  // const { signIn, isSigningInCredentials } = useCreadentialsSignin();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <Header1>Logg inn</Header1>

      <ContentWrapper>
        <Stack gap="2rem">
          <TextInput
            label="Epost"
            required
            handleChange={(value) =>
              setCredentials({ ...credentials, email: value })
            }
          />

          <div>
            <Button
              variant="contained"
              onClick={() => signinWithGoogle()}
              isLoading={isSigningIn}
            >
              Logg inn med Google
            </Button>
          </div>
        </Stack>
      </ContentWrapper>
    </div>
  );
}
