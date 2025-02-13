import React from "react";
// import AuthPage from "@/app/auth/page";
import { render, screen, fireEvent } from "@testing-library/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { beforeEach, vi, it, expect } from "vitest";
import { describe, test } from "vitest";
import AuthPage from "../app/auth/page";
import "@testing-library/jest-dom";

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("<AuthPage />", () => {
  it("calls signIn with Google when Google button is clicked", () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByTestId("google-button"));
    expect(signIn).toHaveBeenCalledWith("google", { callbackUrl: "/" });
  });
  it("calls signIn with Facebook when Facebook button is clicked", () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByTestId("facebook-button"));
    expect(signIn).toHaveBeenCalledWith("facebook", { callbackUrl: "/" });
  });
  it("contains a link to /auth/sign-in", () => {
    render(<AuthPage />);

    const link = screen.getByTestId("email-button");

    expect(link).toHaveAttribute("href", "/auth/sign-in");
  });
});
