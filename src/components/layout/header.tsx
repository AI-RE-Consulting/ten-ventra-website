"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

function formatPacificTimestamp(now: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now) + " PT";
}

export function Header() {
  const [stamp, setStamp] = useState<string>("");

  useEffect(() => {
    const tick = () => setStamp(formatPacificTimestamp(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="px-6 sm:px-10 py-5 flex items-center justify-between text-sm">
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
          className="h-14 w-auto mix-blend-multiply"
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
