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
    <div className="absolute inset-0 -z-10">
      {banded && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-surface/40" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}
      <div
        className={`absolute h-[520px] w-[520px] rounded-full opacity-20 blur-[140px] ${cornerClasses[corner]} ${
          glow === "electric" ? "bg-electric" : "bg-violet"
        }`}
      />
    </div>
  );
}
