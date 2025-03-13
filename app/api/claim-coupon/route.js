import { v4 as uuidv4 } from "uuid";
import connectToDatabase from "@/lib/mongodb";
import Coupon from "@/models/Coupon";
import Claim from "@/models/Claim";
import { cookies } from "next/headers";

export async function POST(req) {
  await connectToDatabase();

  const userIP = req.headers.get("x-forwarded-for") || "Unknown_IP";
  const userCookies = cookies();
  let userCookie = userCookies.get("claim_token")?.value || uuidv4();

  // Check if user has already claimed a coupon
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const existingClaim = await Claim.findOne({
    $or: [{ ip: userIP }, { cookie: userCookie }],
    claimedAt: { $gte: oneHourAgo },
  });

  if (existingClaim) {
    return Response.json(
      { error: "Please wait before claiming again." },
      { status: 403 }
    );
  }

  // Find the next available coupon
  const coupon = await Coupon.findOneAndUpdate(
    { assigned: false },
    { assigned: true },
    { new: true }
  );

  if (!coupon) {
    return Response.json({ error: "No more coupons available." }, { status: 404 });
  }

  // Store the claim record
  await Claim.create({ ip: userIP, cookie: userCookie });

  // Set cookie in response
  userCookies.set("claim_token", userCookie, { httpOnly: true, maxAge: 3600 });

  return Response.json(
    { message: "Coupon claimed successfully!", coupon: coupon.code },
    { status: 200 }
  );
}
