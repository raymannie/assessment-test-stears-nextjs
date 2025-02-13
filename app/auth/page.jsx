"use client";
import React from "react";
import NextLink from "next/link";
import { signIn } from "next-auth/react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function AuthPage() {
  return (
    <div className="space-y-6 w-full">
      <h1 className="font-bold text-xl text-center w-full pb-6">
        Sign in to read Stears
      </h1>
      <button
        data-testid="google-button"
        className="btn btn-secondary w-full"
        onClick={async () => {
          await signIn("google", {
            callbackUrl: "/",
          });
        }}
      >
        <FaGoogle className="mr-3 text-lg" />
        Sign in with Google
      </button>
      <button
        className="btn btn-secondary w-full"
        data-testid="facebook-button"
        onClick={() => {
          signIn("facebook", {
            callbackUrl: "/",
          });
        }}
      >
        <FaFacebookF className="mr-3 text-lg" />
        Sign in with Facebook
      </button>
      <NextLink
        data-testid="email-button"
        className="btn btn-secondary w-full"
        href="/auth/sign-in"
      >
        Sign in with email and password
      </NextLink>
    </div>
  );
}
