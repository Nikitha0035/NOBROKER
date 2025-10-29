



import Booking from "../models/Booking.js";
import { sendEmail } from "../utility/mailConfig.js"


// Get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ success: false, message: "No bookings found" });
        }

        res.status(200).json({ success: true, bookings });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { name, phone, email, city, role } = req.body;

        // Create a new booking in the database
        const newBooking = await Booking.create({
            name,
            phone,
            email,
            city,
            role,
        });

        res.status(201).json({ success: true, booking: newBooking });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


// Update the booking with the slot
export const updateSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const { selectedDate, selectedSlot } = req.body;

        const booking = await Booking.findByIdAndUpdate(id, {
            selectedDate: new Date(selectedDate),
            selectedSlot: selectedSlot,
        }, { new: true });

        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }


        // Send confirmation email to the user 

        const subject = "Booking Slot Updated";
        const text = `Hello ${booking.name},\n\nYour booking has been updated with the following details:\n\n
                      City: ${booking.city}\nRole: ${booking.role}\nSelected Date: ${new Date(booking.selectedDate).toLocaleDateString()}\n
                      Selected Slot: ${booking.selectedSlot}\n\nThank you for booking with us!\n\nBest regards,\nNoBroker Team`;



        try {
            await sendEmail(booking.email, subject, text);
        } catch (error) {
            console.log("Error sending email:", error);
        }


        res.status(200).json({ success: true, booking });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};


// Confirm the booking
export const confirmBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id);

        if (!booking)
            return res.status(404).json({ success: false, message: "Booking not found" });

        booking.status = "CONFIRMED";
        await booking.save();

        res.status(200).json({ success: true, booking });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
