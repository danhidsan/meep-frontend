// eslint-disable-next-line import/prefer-default-export
export const request: <T>(url: string) => Promise<T> = async <T>(url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json as T;
    }
    throw new Error('Response not successful');
  } catch (error) {
    throw new Error(error);
  }
};
