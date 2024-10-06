const userProfile = require("../models/profileModel");
const User = require("../models/userModel");

exports.addUserProfile = async (req, res) => {
  const userId = req.userId;
  const { name, age, weight, height, gender } = req.body;
  try {
    const existingProfile = await userProfile.findOne({ userId });
    if (existingProfile) {
      return res.status(401).json({ message: "profile already created" });
    }
    const profile = await userProfile.create({
      userId,
      name,
      age,
      weight,
      height,
      gender,
    });

    await User.findByIdAndUpdate(userId, { isProfileCompletd: true });

    return res
      .status(200)
      .json({ message: "profile created successfully", profile });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const profile = await userProfile.findOne({ userId });
    if (!profile) {
      return res.status(401).json({ message: "profile not found" });
    }
    return res.status(200).json({ message: "profile retrievd", profile });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUserProfile = async (req, res) => {
  const { userFieldCategory, userField } = req.body;
  const userId = req.userId;
  try {
    const inputFileds = userFieldCategory.toLowerCase();
    const updateProfile = await userProfile.findOneAndUpdate(
      { userId },
      { [inputFileds]: userField },
      { new: true }
    );

    if (!updateProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", updateProfile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
