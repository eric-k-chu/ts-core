export type SafeResult<T, E = Error> =
  | {
      data: T
      error: undefined
    }
  | {
      data: undefined
      error: E
    }

export async function safe<T, E = Error>(promise: Promise<T>): Promise<SafeResult<T, E>> {
  try {
    const data = await promise
    return { data, error: undefined }
  } catch (error) {
    return { data: undefined, error: error as E }
  }
}
