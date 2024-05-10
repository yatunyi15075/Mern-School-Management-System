import {  Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createEvents = async (req, res, next) => {
  console.log(req.body);
  const { events } = req.body;
  try {
  if (!events ) {
    return next("Please Fill Form!", 400);
  }
  await Events.create({ events });
  res.status(200).json({
    success: true,
    message: "Event is Created!",
  });    
  }  catch (err) {
    next(err);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
   const event = await Events.find();
  res.status(200).json({
    success: true,
    event,
  });   
}  catch (err) {
  next(err);
}
};
 
