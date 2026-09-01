interface ScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function Screen({ children, className = "" }: ScreenProps) {
  return (
    <main
      className={`min-h-dvh flex flex-col items-center justify-center px-6 py-12 ${className}`}
    >
      <div className="w-full max-w-md animate-fade-in">{children}</div>
    </main>
  );
}

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
}

export function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <header className="mb-10 text-center">
      <h1 className="text-[1.75rem] leading-snug font-medium tracking-tight text-stone-deep">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-relaxed text-stone-warm">
          {subtitle}
        </p>
      )}
    </header>
  );
}
