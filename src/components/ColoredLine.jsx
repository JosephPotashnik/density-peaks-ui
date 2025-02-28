export function ColoredLine({ stroke, y }) {
  return <line x1="0" x2="100%" y1={y} y2={y} stroke={stroke} strokeWidth="10" />;
}