import mongoose from "mongoose";
import validator from "validator";

const announcementSchema = new mongoose.Schema({
    announcement: {
    type: String,
    required: true
  },
});

export const Announcement = mongoose.model('Announcement', announcementSchema);





