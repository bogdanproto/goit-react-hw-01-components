export function randomColor({ props }) {
  return `#${Math.floor(Math.random() * 10000) + props}`;
}
