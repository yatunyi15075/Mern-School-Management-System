import {Announcement} from "../models/announcementSchema.js";

export const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;
  if (!announcement ) {
    return next("Please Fill Form!", 400);
  }
  await Announcement.create({ announcement});
  res.status(200).json({
    success: true,
    message: "Announcement Created!",
  });
};

export const getAllAnnouncements = async (req, res, next) => {
  const announcements = await Announcement.find();
  res.status(200).json({
    success: true,
    announcements,
  });
};



