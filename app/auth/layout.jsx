import React from "react";

export default function AuthPageLayout({ children }) {
  return (
    <div className=" min-h-dvh flex items-center justify-center">
      <div className="card w-full shadow-md rounded-lg">{children}</div>
    </div>
  );
}
