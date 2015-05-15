export function isServer () {
  return typeof window === 'undefined';
}

export function apiPath () {
  if (isServer()) {
    return `http://localhost:${process.env.PORT}/api`;
  } else {
    return '/api';
  }
}
