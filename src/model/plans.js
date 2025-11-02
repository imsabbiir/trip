import mongoose from "mongoose";

// Schema for each itinerary day
const ItinerarySchema = new mongoose.Schema({
  day: { type: Number, required: true },
  title: { type: String, required: true },
  activities: [{ type: String }],
  meals: {
    breakfast: { type: String },
    lunch: { type: String },
    dinner: { type: String }
  }
});

// Schema for transportation segments
const TransportSegmentSchema = new mongoose.Schema({
  segment: { type: String },
  type: { type: String },
  company: { type: String },
  departureTime: { type: String },
  arrivalTime: { type: String },
  duration: { type: String }
});

// Schema for accommodation
const AccommodationSchema = new mongoose.Schema({
  hotelName: { type: String },
  location: { type: String },
  checkIn: { type: String },
  checkOut: { type: String },
  roomType: { type: String },
  totalRooms: { type: Number },
  contactNumber: { type: String },
  amenities: [String]
});

// Schema for estimated budget
const EstimatedBudgetSchema = new mongoose.Schema({
  perPerson: { type: Number },
  total: { type: Number },
  breakdown: {
    transport: { type: Number },
    accommodation: { type: Number },
    food: { type: Number },
    activities: { type: Number },
    others: { type: Number }
  }
});

// Schema for weather
const WeatherSchema = new mongoose.Schema({
  expectedTemperature: {
    day: { type: String },
    night: { type: String }
  },
  forecast: { type: String }
});

// Schema for emergency contacts
const EmergencyContactsSchema = new mongoose.Schema({
  localPolice: { type: String },
  hospital: { type: String },
  resortManager: { type: String },
  tourGuide: { type: String }
});

// Schema for map info
const MapSchema = new mongoose.Schema({
  latitude: { type: Number },
  longitude: { type: Number },
  googleMapUrl: { type: String }
});

// Schema for destination info
const DestinationSchema = new mongoose.Schema({
  name: { type: String },
  district: { type: String },
  country: { type: String },
  overview: { type: String }
});

// Main TourPlan schema
const TourPlanSchema = new mongoose.Schema(
  {
    tourTitle: { type: String, required: true },
    destination: DestinationSchema,
    duration: {
      days: { type: Number, required: true },
      startDate: { type: String },
      endDate: { type: String }
    },
    groupDetails: {
      totalPeople: { type: Number },
      tripType: { type: String },
      ageGroup: { type: String }
    },
    transportation: {
      from: { type: String },
      to: { type: String },
      mode: { type: String },
      details: [TransportSegmentSchema]
    },
    accommodation: AccommodationSchema,
    itinerary: [ItinerarySchema],
    estimatedBudget: EstimatedBudgetSchema,
    necessaryItems: [String],
    weather: WeatherSchema,
    emergencyContacts: EmergencyContactsSchema,
    photos: [String],
    map: MapSchema,
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Plan || mongoose.model("Plan", TourPlanSchema);
