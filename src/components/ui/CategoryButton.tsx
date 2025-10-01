export default function CategoryButton({ label }: { label: string }) {
  return (
    <button className="font-semibold bg-white/30 px-6 py-2 rounded-4xl">
      {label}
    </button>
  );
}
