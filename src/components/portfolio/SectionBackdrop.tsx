type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const cornerClasses: Record<Corner, string> = {
  "top-left": "-top-32 -left-32",
  "top-right": "-top-32 -right-32",
  "bottom-left": "-bottom-32 -left-32",
  "bottom-right": "-bottom-32 -right-32",
};

export function SectionBackdrop({
  banded = false,
  glow = "electric",
  corner = "top-left",
}: {
  banded?: boolean;
  glow?: "electric" | "violet";
  corner?: Corner;
}) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {banded && <div className="absolute inset-0 bg-surface/40" />}
      <div
        className={`absolute h-[420px] w-[420px] rounded-full opacity-25 blur-[110px] ${cornerClasses[corner]} ${
          glow === "electric" ? "bg-electric" : "bg-violet"
        }`}
      />
    </div>
  );
}
