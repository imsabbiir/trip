import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  best_time: { type: String, required: true },
  how_to_reach: { type: String, required: true },
  activities: { type: [String], required: true },
  map_url: { type: String, required: true },
}, { timestamps: true });

const Destination = mongoose.models.Destination || mongoose.model("Destination", destinationSchema);

export default Destination;
