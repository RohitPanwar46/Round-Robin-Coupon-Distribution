import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  assigned: { type: Boolean, default: false },
});

export default mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema);
