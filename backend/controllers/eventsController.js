import {  Events } from "../models/eventsSchema.js";

export const createEvents = async (req, res, next) => {
  const { events } = req.body;
  if (!events ) {
    return next("Please Fill Form!", 400);
  }
  await Events.create({ events });
  res.status(200).json({
    success: true,
    message: "Event is Created!",
  });
};

export const getAllEvents = async (req, res, next) => {
  const event = await Events.find();
  res.status(200).json({
    success: true,
    event,
  });
};
 
