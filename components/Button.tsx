import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

const variantStyles = {
  primary:
    "bg-stone-deep text-cream-50 hover:bg-stone-deep/90 active:scale-[0.98]",
  secondary:
    "bg-cream-200 text-stone-deep hover:bg-cream-200/80 active:scale-[0.98]",
  ghost:
    "bg-transparent text-stone-warm hover:text-stone-deep hover:bg-cream-200/50",
};

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-2xl px-6 py-3.5
        text-[15px] font-medium
        transition-all duration-200 ease-out
        disabled:opacity-40 disabled:pointer-events-none
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
