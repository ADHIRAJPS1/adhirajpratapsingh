"use client";

import { signIn } from "next-auth/react";
import Head from "./head";

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";
const nextAuthUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL ?? "";
const clientIdValue = googleClientId.endsWith(".apps.googleusercontent.com")
  ? googleClientId
  : `${googleClientId}.apps.googleusercontent.com`;

export default function GoogleLoginButton() {
  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/home" });
  };

  return (
    <>
      <Head />
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        disabled={!googleClientId}
      >
        Continue with Google
      </button>
      <p className="mt-2 text-xs text-slate-500">
        {googleClientId
          ? "Google client ID loaded from env."
          : "Set NEXT_PUBLIC_GOOGLE_CLIENT_ID in .env.local."}
      </p>
      {nextAuthUrl && (
        <p className="mt-1 text-xs text-slate-400">
          NEXTAUTH_URL: {nextAuthUrl}
        </p>
      )}
    </>
  );
}
