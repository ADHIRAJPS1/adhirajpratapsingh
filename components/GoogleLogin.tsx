"use client";

import { signIn } from "next-auth/react";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";

const isGoogleConfigured = Boolean(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export type GoogleLoginProps = {
  callbackUrl?: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  showConfigHint?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "children">;

const defaultClassName =
  "inline-flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60";

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.6-5.6-5.8S8.9 5.8 12 5.8c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.9 3.3 14.7 2.4 12 2.4 6.9 2.4 2.7 6.6 2.7 11.7S6.9 21 12 21c6.9 0 8.5-4.8 8.5-7.3 0-.5-.1-1-.2-1.5H12z"
      />
      <path
        fill="#34A853"
        d="M3.9 14.5c-.5-1.1-.8-2.3-.8-3.6 0-1.3.3-2.5.8-3.6l-3-2.3C.4 7.5 0 9.5 0 11.7c0 2.2.4 4.2 1.1 6.1l2.8-2.3z"
      />
      <path
        fill="#4A90E2"
        d="M12 5.8c1.5 0 2.5.6 3.1 1.1l2.3-2.3C16.9 3.3 14.7 2.4 12 2.4 8 2.4 4.6 4.9 3.2 8.5l2.8 2.3c.6-1.8 2.3-3 6-3z"
      />
      <path
        fill="#FBBC05"
        d="M20.5 13.2H12v3.6h5.1c-.4 1.3-1.5 2.7-3.1 3.5l2.8 2.2c1.6-1.5 2.7-3.7 2.7-6.3 0-.6-.1-1.2-.2-1.8z"
      />
    </svg>
  );
}

export function GoogleLogin({
  callbackUrl = "/",
  className,
  children,
  disabled = false,
  showConfigHint = false,
  ...buttonProps
}: GoogleLoginProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    if (!isGoogleConfigured || disabled || loading) return;

    setLoading(true);
    try {
      await signIn("google", { callbackUrl });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className={className ?? defaultClassName}
        disabled={disabled || loading || !isGoogleConfigured}
        aria-busy={loading}
        {...buttonProps}
      >
        <GoogleIcon />
        {children ?? (loading ? "Signing in..." : "Continue with Google")}
      </button>

      {showConfigHint && !isGoogleConfigured && (
        <p className="mt-2 text-xs text-slate-500">
          Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET, and
          NEXTAUTH_URL in your .env.local file. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID
          for the client-side button.
        </p>
      )}
    </div>
  );
}

export default GoogleLogin;
