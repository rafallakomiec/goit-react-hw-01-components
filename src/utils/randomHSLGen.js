export default function randomHSLGen() {
  const H = Math.round(Math.random() * 360);
  const S = Math.round(Math.random() * 100);
  const L = Math.round(Math.random() * 100);

  return [H, S, L];
}
