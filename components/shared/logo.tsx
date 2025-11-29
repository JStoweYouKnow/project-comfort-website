"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {!imageError && (
        <div className="relative h-10 w-10 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Project Comfort Logo"
            width={40}
            height={40}
            className="h-full w-auto object-contain"
            priority
            onError={() => setImageError(true)}
          />
        </div>
      )}
      {showText && (
        <span className="text-xl font-semibold tracking-tight text-[var(--pc-navy)] whitespace-nowrap">
          Project Comfort
        </span>
      )}
    </Link>
  );
}

