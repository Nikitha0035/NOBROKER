import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const otpStore = new Map();
const OTP_EXPIRY_MS = 60 * 1000; 

function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export const sendOtp = (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: "Phone number required" });

  const otp = generateOtp();
  otpStore.set(phone, { otp, expiresAt: Date.now() + OTP_EXPIRY_MS });

  console.log(` OTP for ${phone}: ${otp}`);
  res.json({ message: "OTP sent successfully (dummy)", otp });
};

export const verifyOtp = (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp)
    return res.status(400).json({ error: "Phone and OTP required" });

  const record = otpStore.get(phone);
  if (!record)
    return res.status(400).json({ error: "No OTP generated for this number" });
  if (Date.now() > record.expiresAt)
    return res.status(400).json({ error: "OTP expired" });
  if (record.otp !== otp)
    return res.status(400).json({ error: "Invalid OTP" });

  const cleanPhone = phone.toString().trim().replace(/\s+/g, "").replace(/^(\+91|91)/, "");

  const token = jwt.sign(
    { phone: cleanPhone },
    process.env.JWT_SECRET || "testsecret",
    { expiresIn: "2h" }
  );

  otpStore.delete(phone);

  console.log(`OTP verified for ${cleanPhone}`);

  res.status(200).json({
    message: "OTP verified successfully",
    token,
    user: { phone: cleanPhone },
  });
};
