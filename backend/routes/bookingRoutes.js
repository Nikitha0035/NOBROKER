import express from "express";
import { createBooking, updateSlot, confirmBooking, getAllBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getAllBookings);
router.put("/:id/slot", updateSlot);
router.put("/:id/confirm", confirmBooking);

export default router;
