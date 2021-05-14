const db = require("../config/db");

const mentorSchema = new db.Schema({
  name: String,
  email: String,
  isMentor: Boolean,
});

const Mentor = new db.model("Mentor", mentorSchema);

module.exports.Mentor = Mentor;
