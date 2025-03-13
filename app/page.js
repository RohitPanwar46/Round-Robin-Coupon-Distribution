"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [coupon, setCoupon] = useState("");

  const claimCoupon = async () => {
    setMessage("Claiming your coupon...");

    const res = await fetch("/api/claim-coupon", {
      method: "POST",
    });

    const data = await res.json();

    if (res.ok) {
      setCoupon(data.coupon);
      setMessage("Coupon claimed successfully!");
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="text-black flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Round-Robin Coupon Distribution</h1>
      <button
        onClick={claimCoupon}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Claim Coupon
      </button>

      {message && <p className="mt-4 text-lg">{message}</p>}
      {coupon && <p className="text-green-600 font-bold">{coupon}</p>}
    </div>
  );
}
