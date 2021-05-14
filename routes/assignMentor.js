const { Student } = require("../models/student");
const { fetchData } = require("../utils/networkHandler");

const assignMentor = async (req, res) => {
  let unassignedStudents = req.body.students;
  for (let student of unassignedStudents) {
    let res = await Student.findByIdAndUpdate(student._id, {
      mentor: req.body.mentor,
    });
  }
  let data = await fetchData();
  res.json(data);
};

module.exports.assignMentor = assignMentor;
