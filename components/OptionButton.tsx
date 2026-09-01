interface OptionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  index?: number;
}

export function OptionButton({ children, onClick, index = 0 }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        animate-fade-in-up w-full rounded-2xl
        border border-cream-200 bg-white
        px-5 py-4 text-left text-[15px]
        text-stone-deep transition-all duration-200
        hover:border-accent/30 hover:bg-cream-100
        active:scale-[0.99]
      "
      style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
    >
      {children}
    </button>
  );
}
