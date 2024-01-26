import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// post
const signupController = async (req, res) => {
  try {
    // Get the data
    const { username, email, phone, password, confirmpassword } = req.body;

    // Validation
    if (!username || username === "") {
      return res.status(400).json({ message: "username are required" });
    }
    if (!email || email === "") {
      return res.status(400).json({ message: "email are required" });
    }
    if (!phone || phone === "") {
      return res.status(400).json({ message: "phone are required" });
    }
    if (!password || password === "") {
      return res.status(400).json({ message: "password are required" });
    }
    if (!confirmpassword || confirmpassword === "") {
      return res.status(400).json({ message: "confirmpassword are required" });
    }

    // // Check if the email is already registered
    // const existingUser = await userModel.findOne({ email });
    // if (existingUser) {
    //   return res.status(200).json({
    //     success: false,
    //     message: "Email already registered. Please login.",
    //   });
    // }

    // Check if the phone is already registered
    const existingUser = await userModel.findOne({ phone });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "phone already registered. Please login.",
      });
    }

    // Hashing password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const checkpassword = await bcrypt.compare(confirmpassword, hashedPassword);
    if (!checkpassword) {
      return res.status(500).json({
        success: false,
        message: "password and confirmpassword not match",
      });
    }

    // Save hashed password in the database
    const user = await new userModel({
      username,
      phone,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
    //
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message, // Send only the error message for security reasons
    });
  }
};

// post
const signinController = async (req, res) => {
  try {
    const { phone, password } = req.body;
    // validation
    if (!phone || !password) {
      res.status(401).send({
        success: false,
        message: "Invalid phone or password",
      });
    }

    const user = await userModel.findOne({ phone });
    if (!user) {
      res.status(404).send({
        success: "false",
        message: "phone Not Register",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid Password  ",
      });
    }
    // token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(200).send({
      success: true,
      message: "Successfully Login",
      user: {
        name: user.name,
        // email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Login error",
      error,
    });
  }
};

export { signupController, signinController };
