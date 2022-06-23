import { Response, Request } from "express";
const User = require("./model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(201).json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
});
