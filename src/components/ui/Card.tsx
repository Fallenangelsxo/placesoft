"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  imageAlt?: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({
  imageSrc,
  imageAlt = "",
  imageProps,
  heading,
  description,
  footer,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "group overflow-hidden rounded-xl border border-[--border] bg-[--card] text-[--foreground] shadow-sm transition",
        "hover:shadow-lg hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--border))]",
        className,
      ].join(" ")}
      {...props}
    >
      {imageSrc ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition will-change-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            {...imageProps}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0)_50%)] opacity-80" />
          <div className="pointer-events-none absolute inset-0 ring-0 ring-[--accent] transition group-hover:ring-2 group-hover:ring-offset-0" />
        </div>
      ) : null}
      <div className="space-y-2 p-4">
        {heading ? (
          <h3 className="text-lg font-semibold tracking-tight">{heading}</h3>
        ) : null}
        {description ? (
          <p className="text-sm text-[--muted-foreground] leading-relaxed">{description}</p>
        ) : null}
        {children}
      </div>
      {footer ? <div className="border-t border-[--border] p-4">{footer}</div> : null}
    </div>
  );
}

export default Card;
