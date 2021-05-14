const { Student } = require("../models/student");
const { fetchData } = require("../utils/networkHandler");

const changeMentor = async (req, res) => {
  let result = await Student.findByIdAndUpdate(req.body.id, {
    mentor: req.body.newMentor,
  });
  let data = await fetchData();
  res.json(data);
};

module.exports.changeMentor = changeMentor;
