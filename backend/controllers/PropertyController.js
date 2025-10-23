import Property from "../models/Property.js";
import nodemailer from "nodemailer";
import User from "../models/User.js"; 

export const createProperty = async (req, res) => {
  try {
    const ownerId = req.user?.phone;
    if (!ownerId) {
      return res.status(400).json({
        success: false,
        message: "Missing ownerId (phone) from token",
      });
    }

    const {
      city,
      locality,
      landmark,
      propertyType,
      adType,
      rent,
      deposit,
      amenities,
      availability,
      startTime,
      endTime,
      isAllDay,
    } = req.body;

    const newProperty = new Property({
      ownerId,
      city,
      locality,
      landmark,
      propertyType,
      adType,
      rent,
      deposit,
      amenities,
      availability,
      startTime,
      endTime,
      isAllDay,
    });

    await newProperty.save();

    const user = await User.findOne({ phone: ownerId });

    const recipientEmail = user?.email;

    if (recipientEmail) {
      // Set up Gmail transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"NoBroker Team" <${process.env.EMAIL_USER}>`,
        to: recipientEmail, 
        subject: "Property Posted Successfully on NoBroker",
        html: `
          <h2>Your Property Has Been Posted Successfully </h2>
          <p>Dear ${user.name || "Owner"},</p>
          <p>Here are your property details:</p>
          <ul>
            <li><b>City:</b> ${city || "N/A"}</li>
            <li><b>Locality:</b> ${locality || "N/A"}</li>
            <li><b>Property Type:</b> ${propertyType || "N/A"}</li>
            <li><b>Ad Type:</b> ${adType || "N/A"}</li>
            <li><b>Rent:</b> ₹${rent || "N/A"}</li>
            <li><b>Deposit:</b> ₹${deposit || "N/A"}</li>
            <li><b>Availability:</b> ${availability || "N/A"}</li>
          </ul>
          <p>Manage or edit your listing anytime from the <b>My Properties</b> section.</p>
          <br/>
          <p>Regards,<br/>NoBroker Team</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${recipientEmail}`);
    } else {
      console.warn(`No email found for user with phone: ${ownerId}`);
    }

    res.status(201).json({
      success: true,
      message: "Property posted successfully.",
      propertyId: newProperty._id,
    });
  } catch (error) {
    console.error("Error creating property:", error);
    res.status(500).json({
      success: false,
      message: "Failed to post property",
      error: error.message,
    });
  }
};
export const getAllProperties = async (req, res) => {
  try {
    const { ownerId } = req.query;

    let query = {};
    if (ownerId) query.ownerId = ownerId; 

    const properties = await Property.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch properties",
      error: error.message,
    });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
    res.json({ success: true, property });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching property",
      error: error.message,
    });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Property.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.json({
      success: true,
      message: "Property updated successfully",
      property: updated,
    });
  } catch (error) {
    console.error("Error updating property:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update property",
      error: error.message,
    });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findByIdAndDelete(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting property:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete property",
      error: error.message,
    });
  }
};
