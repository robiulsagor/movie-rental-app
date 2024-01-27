export function getImgUrl(value) {
  const url = `src/assets/movie-covers/${value}`;
  return new URL(url, window.location.href).toString();
}
