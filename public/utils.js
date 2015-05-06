export function isServer () {
  return typeof window === 'undefined';
}

export function apiPath () {
  if ( isServer() ) {
    const {PORT} = process.env;
    return `http://localhost:${PORT}/api`;
  } else {
    return '/api';
  }
}
