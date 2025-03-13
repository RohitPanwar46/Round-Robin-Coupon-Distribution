import mongoose from "mongoose";

const ClaimSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  cookie: { type: String, required: true },
  claimedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Claim || mongoose.model("Claim", ClaimSchema);
