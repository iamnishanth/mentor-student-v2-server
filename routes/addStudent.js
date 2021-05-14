const { Student } = require("../models/student");

const addStudent = (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    mentor: "",
  });

  student.save();
  res.json({ message: "Success" });
};

module.exports.addStudent = addStudent;
