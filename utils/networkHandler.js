const { Mentor } = require("../models/mentor");
const { Student } = require("../models/student");

const fetchData = async () => {
  let mentors = await Mentor.find({});
  let students = await Student.find({});
  let obj = {
    mentors,
    students,
  };
  return obj;
};

module.exports.fetchData = fetchData;
