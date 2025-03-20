// import { resToTkError } from "./TkError";

type Params = {
  url: string;
};

export async function get<T>({ url }: Params): Promise<T> {
  const res: Response = await fetch(url);

  if (!res.ok) {
    // throw await resToTkError<ErrorData>(res);
    throw new Error("Error fetching data");
  }

  const result = (await res.json()) as T & { message: string };
  return result;
}
