// export const API_URL = 'https://shepherd-api.herokuapp.com';

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://shepherd-api.herokuapp.com'
    : 'http://localhost:3000';
