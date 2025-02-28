import {ColoredLine} from '/src/components/ColoredLine.jsx'


export function DistressedEarthLinesContainer() {

  const lineCount = 5;
  const lineSpacing = 15; // Adjust as needed
  const svgHeight = lineCount * lineSpacing;

  return (
    <svg className="LinesContainer" xmlns="http://www.w3.org/2000/svg" width="100%"  height={svgHeight}>
      <ColoredLine stroke="#D52429" y="5" />
      <ColoredLine stroke="#F1602C" y="20" />
      <ColoredLine stroke="#EC8922" y="35" />
      <ColoredLine stroke="#915018" y="50" />
      <ColoredLine stroke="#6C3F18" y="65" />
    </svg>
  );
}