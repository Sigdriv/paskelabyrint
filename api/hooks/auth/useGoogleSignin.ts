import { googleSignin } from '@/api/api';
import { useMutation } from '@tanstack/react-query';

export function useGoogleSignin() {
  const { mutate, isPending: isSigningIn } = useMutation({
    mutationFn: googleSignin,
  });

  const signinWithGoogle = () => mutate();

  return {
    signinWithGoogle,
    isSigningIn,
  };
}
