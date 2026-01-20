export function InfoBox({ text }: { text: string }) {
  return (
    <div
      className="flex items-center gap-2 max-w-lg p-2
				 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800"
    >
      <span>{text}</span>
    </div>
  );
}
