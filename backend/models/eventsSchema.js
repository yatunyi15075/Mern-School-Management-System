import mongoose from "mongoose";
import validator from "validator";

const eventsSchema = new mongoose.Schema({
  events: {
    type: String,
    required: true
  },
});


export const Events = mongoose.model('Events', eventsSchema);



