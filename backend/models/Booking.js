import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    role: { type: String, required: true },
    selectedDate: { type: Date, required: false },
    selectedSlot: { type: String, required: false },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
