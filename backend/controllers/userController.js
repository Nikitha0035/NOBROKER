import User from "../models/User.js";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${req.user.phone}_${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

export const uploadProfilePhoto = [
  upload.single("photo"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      let phone = req.user.phone?.toString().replace(/\s+/g, "").replace(/^(\+91|91)/, "");
      const user = await User.findOne({
        $or: [{ phone }, { phone: `+91${phone}` }, { phone: `91${phone}` }],
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      const imagePath = `/uploads/${req.file.filename}`;
      user.photo = imagePath;
      await user.save();

      res.status(200).json({
        success: true,
        message: "Profile photo uploaded successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          photo: user.photo,
        },
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Server error during upload" });
    }
  },
];
export const removeProfilePhoto = async (req, res) => {
  try {
    let phone = req.user.phone?.toString().replace(/\s+/g, "").replace(/^(\+91|91)/, "");
    const user = await User.findOne({
      $or: [{ phone }, { phone: `+91${phone}` }, { phone: `91${phone}` }],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.photo) {
      const filePath = path.join(process.cwd(), user.photo.replace(/^\//, ""));
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    user.photo = "";
    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile photo removed successfully",
      user,
    });
  } catch (error) {
    console.error("Remove photo error:", error);
    res.status(500).json({ error: "Server error during photo removal" });
  }
};

export const saveUser = async (req, res) => {
  try {
    let { name, email } = req.body;
    let phone = req.user.phone;

    if (!name || !email || !phone)
      return res.status(400).json({ error: "Name, email, and phone are required" });

    email = email.trim().toLowerCase();
    phone = phone.replace(/\s+/g, "").replace(/^\+?91/, "");

    const existingUser = await User.findOne({
      $or: [{ email }, { phone }],
    }).collation({ locale: "en", strength: 2 });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists. Please login instead.",
      });
    }

    const newUser = new User({ name, email, phone });
    await newUser.save();

    await sendWelcomeEmail(newUser);

    res.status(201).json({
      message: "Signup successful! Welcome email sent.",
      user: newUser,
    });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};

export const checkUserExists = async (req, res) => {
  try {
    let phone = req.user.phone;
    if (!phone) return res.status(400).json({ error: "Phone not found in token" });

    phone = phone.toString().trim().replace(/\s+/g, "").replace(/^(\+91|91)/, "");
    const user = await User.findOne({
      $or: [{ phone }, { phone: `+91${phone}` }, { phone: `91${phone}` }],
    });

    if (user) return res.status(200).json({ exists: true, user });
    return res.status(200).json({ exists: false });
  } catch (err) {
    console.error("Check-user error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
export const loginUser = async (req, res) => {
  try {
    let phone = req.user.phone;
    if (!phone) return res.status(400).json({ error: "Phone not found in token" });

    phone = phone.toString().trim().replace(/\s+/g, "").replace(/^(\+91|91)/, "");
    const user = await User.findOne({
      $or: [{ phone }, { phone: `+91${phone}` }, { phone: `91${phone}` }],
    });

    if (!user) return res.status(404).json({ error: "No account found with this number." });

    
res.status(200).json({
  message: "Login successful",
  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    photo: user.photo,
  },
});


  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error during login" });
  }
};


const sendWelcomeEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"NoBroker Team" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Welcome to NoBroker",
      html: `<h3>Hello ${user.name},</h3><p>Welcome to NoBroker!</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to:", user.email);
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};
