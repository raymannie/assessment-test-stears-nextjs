import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { signIn } from "next-auth/react";
import SignIn from "../app/auth/sign-in/page";
import "@testing-library/jest-dom";

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}));

describe("SignIn Page", () => {
  it("renders input fields and buttons", () => {
    render(<SignIn />);
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("social-button")).toBeInTheDocument();
  });
  it("shows validation error when fields are empty", async () => {
    render(<SignIn />);
    const signInButton = screen.getByTestId("submit-button");
    fireEvent.click(signInButton);
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });
  it("calls signIn function on successful form submission", async () => {
    render(<SignIn />);
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));
    expect(signIn).toHaveBeenCalledWith("credentials", {
      email: "test@example.com",
      password: "password123",
      redirect: false,
    });
  });
  it("shows an error message when sign-in fails", async () => {
    signIn.mockResolvedValueOnce({ error: "Invalid email or password." });
    render(<SignIn />);
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText("Invalid email or password.")
    ).toBeInTheDocument();
  });
});
