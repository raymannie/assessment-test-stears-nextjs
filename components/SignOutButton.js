"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function SignOutButton() {
  return (
    <button
      className="btn btn-secondary px-5"
      onClick={() => signOut({ callbackUrl: "/auth" })}
    >
      Sign out
    </button>
  );
}
