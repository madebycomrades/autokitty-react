export default function (location$) {
  return location$
    .filter(location => location.name === 'home');
}
