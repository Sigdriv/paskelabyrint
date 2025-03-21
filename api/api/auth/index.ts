import { post } from '@/http';

import { urls } from '../urls';

export async function googleSignin() {
  //   const data = await get<{ url: string }>({ url: urls.googleSignin });

  //   console.log("data", data);

  //   window.location.href = data.url;

  window.location.href = urls.googleSignin;
}

export interface Credentials {
  email: string;
  password: string;
  remember: boolean;
}

export function signinCredentials(credentials: Credentials) {
  return post({ url: urls.signInCredentials, body: credentials });
}
