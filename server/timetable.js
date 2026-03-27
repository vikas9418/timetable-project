const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  course: { type: String, required: true },
  day: { type: String, required: true },
  lecture: { type: String, required: true },
  subject: { type: String, required: true }
});


module.exports = mongoose.model("TimetableNewFresh", timetableSchema);