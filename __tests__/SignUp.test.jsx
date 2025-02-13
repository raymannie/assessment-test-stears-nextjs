import SignUp from "../app/auth/sign-up/page";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("next/link", () => ({
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

vi.mock("@/utils", () => ({
  validateFields: vi.fn((fields) => {
    const errors = {};
    if (fields.email && !fields.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (fields.password && fields.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (fields.name && fields.name.length < 2) {
      errors.name = "Name is too short";
    }
    return errors;
  }),
}));

describe("SignUp Component", () => {
  it("renders the signup form", () => {
    render(<SignUp />);
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("validates fields on input change", async () => {
    render(<SignUp />);
    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "invalid email" } });
    await waitFor(() =>
      expect(screen.getByTestId("email-error")).toBeInTheDocument()
    );
  });

  it("submits form successfully", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Success" }),
      })
    );

    render(<SignUp />);
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByTestId("submit-button"));
    await waitFor(() =>
      expect(screen.getByTestId("test-message")).toBeInTheDocument()
    );
  });

  it("shows error message on failed signup", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: "Signup failed" }),
      })
    );

    render(<SignUp />);
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));
    await waitFor(() =>
      expect(screen.getByTestId("test-message")).toBeInTheDocument()
    );
  });
});
