import connectToDatabase from "@/lib/mongodb";
import Coupon from "@/models/Coupon";

export async function GET() {
  await connectToDatabase();

  const existingCoupons = await Coupon.find();
  if (existingCoupons.length > 0) {
    return Response.json({ message: "Coupons already exist!" }, { status: 200 });
  }

  const sampleCoupons = [
    { code: "DISCOUNT10", assigned: false },
    { code: "SAVE20", assigned: false },
    { code: "OFFER30", assigned: false },
  ];

  await Coupon.insertMany(sampleCoupons);

  return Response.json({ message: "Dummy Coupons Added!" }, { status: 201 });
}
