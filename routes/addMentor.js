const { Mentor } = require("../models/mentor");

const addMentor = (req, res) => {
  const mentor = new Mentor({
    name: req.body.name,
    email: req.body.email,
    isMentor: true,
  });

  mentor.save();
  res.json({ message: "Success" });
};

module.exports.addMentor = addMentor;
