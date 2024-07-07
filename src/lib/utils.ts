export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (error && typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export function extractSpotifyTrackId(url: string): string | null {
  // Split the URL by '/'
  const parts = url.split('/');
  // Find the index of 'track' and return the next part
  const trackIndex = parts.indexOf('track');
  return trackIndex !== -1 && trackIndex + 1 < parts.length ? parts[trackIndex + 1] : null;
}