import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },

    email: { 
      type: String, 
      required: true, 
      unique: true,      
      trim: true, 
      lowercase: true 
    },

    phone: { 
      type: String, 
      required: true, 
      unique: true,      
      trim: true 
    },

    photo: {  
      type: String,  
      
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
