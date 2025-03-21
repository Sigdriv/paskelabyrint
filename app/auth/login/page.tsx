'use client';

import { useState } from 'react';

import Image from 'next/image';

import type { Credentials } from '@/api/api';
import { useCreadentialsSignin, useGoogleSignin } from '@/api/hooks';
import { Button, Card, Header1, Stack, TextInput } from '@/components';
import GooglePicture from '@/public/assets/google/google.png';
import { Divider } from '@mui/material';

import { initialCredentials } from './utils';

export default function Page() {
  const { signinWithGoogle, isSigningIn } = useGoogleSignin();

  const [credentials, setCredentials] =
    useState<Credentials>(initialCredentials);

  const { signInWithCredentials, isSigningInCredentials } =
    useCreadentialsSignin({
      onSuccess: () => setCredentials(initialCredentials),
    });

  return (
    <Stack justifyContent="center" alignItems="center">
      <Header1>Logg inn</Header1>

      <Card>
        <Stack gap="2rem">
          <form
            action="submit"
            onSubmit={(e) => {
              e.preventDefault();
              signInWithCredentials(credentials);
            }}
          >
            <Stack gap="1rem">
              <TextInput
                label="Epost"
                required
                handleChange={(value) =>
                  setCredentials({ ...credentials, email: value })
                }
                type="text"
                value={credentials.email}
                inputWidth="25rem"
              />

              <TextInput
                label="Passord"
                required
                handleChange={(value) =>
                  setCredentials({ ...credentials, password: value })
                }
                type="password"
                value={credentials.password}
                inputWidth="25rem"
              />

              <Stack gap="1rem" alignItems="center" direction="row-reverse">
                <Button
                  width="10rem"
                  variant="contained"
                  type="submit"
                  isLoading={isSigningInCredentials}
                >
                  Logg inn
                </Button>

                <Button onClick={() => {}}>Har du ikke bruker?</Button>
              </Stack>
            </Stack>
          </form>

          <Stack gap="1rem">
            <Divider textAlign="center">eller</Divider>

            <Stack justifyContent="center" alignItems="center">
              <Button
                width="20rem"
                variant="contained"
                onClick={() => signinWithGoogle()}
                isLoading={isSigningIn}
              >
                <Stack direction="row" gap="1rem" alignItems="center">
                  <Image
                    src={GooglePicture}
                    alt="Google logo"
                    width={32}
                    height={32}
                  />
                  Logg inn med Google
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
