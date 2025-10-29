import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import otpRoutes from "./routes/otpRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import propertyRoutes from "./routes/PropertyRoutes.js";
import path from "path";


import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/otp", otpRoutes);
app.use("/api/user", userRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/bookings", bookingRoutes);


app.get("/", (req, res) => res.send(" Backend running"));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.listen(process.env.PORT || 5000, () =>
  console.log(` Server running on port ${process.env.PORT || 5000}`)
);

