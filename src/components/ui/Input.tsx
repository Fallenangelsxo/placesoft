"use client";

import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
}

const baseInput =
  "block w-full rounded-md border border-[--border] bg-[--background] text-[--foreground] placeholder:text-[color-mix(in_oklab,var(--foreground)_40%,transparent)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className = "", error, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    return (
      <div className="w-full">
        {label ? (
          <label
            htmlFor={inputId}
            className="mb-1 inline-block text-sm text-[--muted-foreground]"
          >
            {label}
          </label>
        ) : null}
        <input id={inputId} ref={ref} className={[baseInput, className].join(" ")} {...props} />
        {error ? (
          <p className="mt-1 text-xs text-[--destructive]">{error}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
