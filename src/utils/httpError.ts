import axios from 'axios';

export const extractErrorMessage = (error: unknown, fallback: string): string => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data;
    if (typeof responseData === 'string' && responseData.trim().length > 0) {
      return responseData;
    }

    if (responseData && typeof responseData === 'object') {
      const possibleKeys = ['message', 'error', 'details', 'title'];
      for (const key of possibleKeys) {
        const value = (responseData as Record<string, unknown>)[key];
        if (typeof value === 'string' && value.trim().length > 0) {
          return value;
        }
      }
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
};
