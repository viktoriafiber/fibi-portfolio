const labels = [
  { text: "draft", top: "15%", left: "55%" },
  { text: "render", top: "25%", left: "70%" },
  { text: "wip", top: "45%", left: "62%" },
  { text: "v02", top: "60%", left: "75%" },
  { text: ".mp4", top: "70%", left: "58%" },
  { text: "archive", top: "35%", left: "48%" },
];

export default function DecorativeLabels() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2] hidden lg:block" aria-hidden="true">
      {labels.map((label) => (
        <span
          key={label.text}
          className="absolute font-typewriter text-[9px] text-white/15 tracking-wider"
          style={{ top: label.top, left: label.left }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
