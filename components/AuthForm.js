"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (type === "login") {
      const res = await signIn("credentials", { ...form, redirect: false });
      if (res.ok) router.push("/articles");
      else setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">{type === "login" ? "Sign In" : "Sign Up"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
