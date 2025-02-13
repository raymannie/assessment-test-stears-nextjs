"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { validateFields } from "@/utils";

export default function SignUp() {
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    success: false,
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Validate field and update errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateFields({ [name]: value })[name] || "",
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Validate entire form
      const validationErrors = validateFields(form);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      try {
        const res = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        setResponseMessage({
          message: data.message || "An error occurred",
          success: res.ok,
        });

        if (res.ok) {
          setForm({ email: "", password: "", name: "" });
          setErrors({});
        }
      } catch (error) {
        setResponseMessage({
          message: "Something went wrong. Please try again.",
          success: false,
        });
      }
    },
    [form]
  );

  return (
    <div className="space-y-8 w-full">
      <h3 className="font-bold text-xl text-center pb-4">
        Sign up to read Stears
      </h3>

      {responseMessage.message && (
        <p
          data-testid="test-message"
          className={`text-center ${
            responseMessage.success ? "text-green-500" : "text-red-500"
          } pb-2`}
        >
          {responseMessage.message}
        </p>
      )}

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div>
          <input
            data-testid="email-input"
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <p data-testid="email-error" className="text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            data-testid="name-input"
            className="input"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            data-testid="password-input"
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          data-testid="submit-button"
          className="btn btn-primary w-full"
          type="submit"
        >
          Sign Up
        </button>
        <Link className="btn btn-secondary w-full" href="/auth">
          Sign in with social
        </Link>
      </form>

      <p className="text-center py-4">
        Already have an account?{" "}
        <Link className="text-blue-600" href="/auth/sign-in">
          Sign in
        </Link>
      </p>
    </div>
  );
}
