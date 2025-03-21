import { useSnackbar } from 'notistack';

import type { Credentials } from '@/api/api';
import { signinCredentials } from '@/api/api';
import { useMutation } from '@tanstack/react-query';

interface Parms {
  onSuccess: () => void;
}

export function useCreadentialsSignin({ onSuccess }: Parms) {
  const { enqueueSnackbar } = useSnackbar();

  const { mutate, isPending: isSigningInCredentials } = useMutation({
    mutationFn: signinCredentials,
    onSuccess: () => {
      onSuccess();

      enqueueSnackbar('Logget inn med epost og passord', {
        variant: 'success',
      });
    },
    onError: () =>
      enqueueSnackbar('Feil brukernavn eller passord', {
        variant: 'error',
      }),
  });

  const signInWithCredentials = (credentials: Credentials) =>
    mutate(credentials);

  return {
    signInWithCredentials,
    isSigningInCredentials,
  };
}
