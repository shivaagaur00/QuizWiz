import Student from "./../Models/Student.js";

export const addStudent = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await Student.findOne({ email: email });
    if (user) {
      return res
        .status(201)
        .json({ message: "User with this email already exist" });
    }
    const newUser = new Student(req.body);
    let output = await newUser.save();
    return res.status(200).json({ message: output });
  } catch (error) {
    return res.status(500).json({ message: "Could not fetch data" });
  }
};

export const getStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Student.findOne({ email: email });

    if (!user) {
      return res
        .status(203)
        .json({ message: "User with this email does not exist" });
    }

    if (password === user.password) {
      return res.status(200).json({ ...user });
    } else {
      return res.status(201).json({ message: "Wrong Password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Could not fetch data" });
  }
};
