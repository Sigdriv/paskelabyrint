// import { resToTkError } from './TkError';

type Params = {
  url: string;
  body?: object;
  contentType?: string;
};

export async function post<T>({
  url,
  body = {},
  contentType = 'application/json',
}: Params): Promise<T & { message: string }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': contentType,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    // throw await resToTkError<ErrorData>(res);
    throw new Error('Error posting data');
  }

  const result = (await res.json()) as T & { message: string };
  return result;
}
