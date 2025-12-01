import Link from "next/link";
import { App } from "@/lib/apps";

interface AppLinkProps {
  app: App;
  children: React.ReactNode;
  className?: string;
  showExternalIcon?: boolean;
}

export default function AppLink({
  app,
  children,
  className = "",
  showExternalIcon = false,
}: AppLinkProps) {
  // If app has external URL, use it and open in new tab
  if (app.externalUrl) {
    return (
      <a
        href={app.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        {showExternalIcon && (
          <span className="inline-block ml-1">
            <svg
              className="w-4 h-4 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        )}
      </a>
    );
  }

  // Otherwise, use internal Next.js link
  return (
    <Link href={`/apps/${app.slug}`} className={className}>
      {children}
    </Link>
  );
}


