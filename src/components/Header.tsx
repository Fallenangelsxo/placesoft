"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[--border] bg-[color-mix(in_oklab,var(--background)_85%,black_15%)] backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--background)_75%,black_25%)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="size-7 rounded-md bg-[--accent] shadow-[inset_0_-1px_0_rgba(0,0,0,0.25)]" />
          <span className="text-base font-semibold tracking-tight">ForgeMarket</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link className="text-[--muted-foreground] hover:text-[--foreground] transition" href="/">Home</Link>
          <Link className="text-[--muted-foreground] hover:text-[--foreground] transition" href="/projects">Projects</Link>
          <Link className="text-[--muted-foreground] hover:text-[--foreground] transition" href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
