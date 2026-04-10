export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-purple text-[11px] font-semibold tracking-[0.15em] uppercase mb-3">
      {children}
    </p>
  );
}
