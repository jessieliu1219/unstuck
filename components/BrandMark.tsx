interface BrandMarkProps {
  label?: string;
}

export function BrandMark({ label = "Unstuck" }: BrandMarkProps) {
  return (
    <div className="mb-16 text-center">
      <p className="text-sm tracking-wide text-stone-warm uppercase">
        {label}
      </p>
    </div>
  );
}
