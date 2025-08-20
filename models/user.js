const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 80
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    passwordHash: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["Admin", "Legal", "PM", "Sales", "User"],
        default: "User",
        required: true,
        trim: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
