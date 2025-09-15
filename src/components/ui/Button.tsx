"use client";

import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed gap-2";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[--accent] text-[--accent-foreground] hover:bg-[color-mix(in_oklab,var(--accent)_85%,#000)] shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]",
  secondary:
    "bg-[--muted] text-[--foreground] hover:bg-[color-mix(in_oklab,var(--muted)_80%,#000)] border border-[--border]",
  outline:
    "bg-transparent text-[--foreground] border border-[--border] hover:bg-[color-mix(in_oklab,var(--muted)_65%,transparent)]",
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  fullWidth,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      aria-busy={isLoading || undefined}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block size-4 animate-spin rounded-full border-2 border-[--accent-foreground] border-r-transparent" />
      ) : null}
      <span>{children}</span>
    </button>
  );
}

export default Button;
