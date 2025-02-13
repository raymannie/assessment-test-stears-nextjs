"use client";
import React from "react";
import { validateFields } from "@/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const newErrors = validateFields({ [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: newErrors[name] || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFields(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.error) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email or password.",
      }));
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="space-y-8 w-full">
      <h1 className="font-bold text-xl text-center w-full pb-4">
        Sign in to read Stears
      </h1>
      <div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <input
              data-testid="email-input"
              className="input"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              data-testid="password-input"
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            data-testid="submit-button"
            className="btn btn-primary w-full"
            type="submit"
          >
            Sign In
          </button>
          <Link
            data-testid="social-button"
            className="btn btn-secondary w-full"
            href="/auth"
          >
            Sign in with social
          </Link>
        </form>
      </div>
      <p className="text-center py-4">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-600" href="/auth/sign-up">
          Sign up
        </Link>
      </p>
    </div>
  );
}
