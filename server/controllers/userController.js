const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

exports.registerUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: 'User already exists!',
      });
    }

    await UserModel.create(req.body);
    res.status(201).json({
      success: true,
      message: 'User registered successfully!',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist. Please Register",
      });
    }
    if (user.password !== req.body.password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password. Please try again.',
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });

    return res.status(200).json({
      success: true,
      message: 'User authenticated successfully!!!',
      token,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId).select('-password');

    res.json({
      success: true,
      message: 'User details fetched successfully',
      data: user,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
