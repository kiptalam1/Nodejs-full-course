const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller
const registerUser = async (req, res) => {
	try {
		// extract user info from req.body
		const { username, email, password, role } = req.body;

		// check if user already exists in database.
		const checkExistingUser = await User.findOne({
			$or: [{ username }, { email }],
		});
		if (checkExistingUser) {
			res.status(400).json({
				success: false,
				message:
					"User with those credentials already exists. Please try again with another email or username",
			});
		}

		// hash user password.
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// create a new user and save in the database.
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			role: role || "user",
		});
		await newUser.save();

		if (newUser) {
			res.status(201).json({
				success: true,
				message: "User registered successfully!",
			});
		} else {
			res.status(400).json({
				success: false,
				message: "Registration failed, please try again",
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred, please try again",
		});
	}
};

// login controller
const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;

		// find if current user exists in database.
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(400).json({
				success: false,
				message: "User does not exist!",
			});
		}

		// check if password is correct or not.
		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res.status(400).json({
				success: false,
				message: "Invalid credentials!",
			});
		}

		// create user token.
		const accessToken = jwt.sign(
			{
				userId: user._id,
				username: user.username,
				role: user.role,
			},
			process.env.JWT_SECRET_KEY,
			{
				expiresIn: "15m",
			}
		);

		res.status(200).json({
			success: true,
			message: "Log in successful",
			accessToken,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred, please try again",
		});
	}
};

module.exports = {
	registerUser,
	loginUser,
};
