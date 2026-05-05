"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

function formatLocalTimestamp(now: Date): string {
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const y = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${m}/${d}/${y} ${hh}:${mm}:${ss}`;
}

export function Header() {
  const [stamp, setStamp] = useState<string>("");

  useEffect(() => {
    const tick = () => setStamp(formatLocalTimestamp(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="px-6 sm:px-10 py-2 flex items-center justify-between text-sm">
      <Link
        href="/"
        aria-label={`${siteConfig.name} — home`}
        className="inline-flex items-center"
      >
        <Image
          src="/images/logo.png"
          alt={siteConfig.name}
          width={2606}
          height={976}
          priority
          className="h-16 w-auto mix-blend-multiply"
        />
      </Link>
      <span
        aria-hidden="true"
        suppressHydrationWarning
        className="font-mono text-xs text-muted-foreground"
      >
        {stamp || " "}
      </span>
    </header>
  );
}
