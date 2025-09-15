"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[--border] bg-[--background]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[--muted-foreground]">
            © {new Date().getFullYear()} ForgeMarket. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="https://x.com"
              target="_blank"
              className="text-[--muted-foreground] hover:text-[--foreground] transition"
            >
              X
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-[--muted-foreground] hover:text-[--foreground] transition"
            >
              GitHub
            </Link>
            <Link
              href="mailto:hello@forgemarket.app"
              className="text-[--muted-foreground] hover:text-[--foreground] transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
