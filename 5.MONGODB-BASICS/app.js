const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("database connected successfully"))
	.catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	isActive: Boolean,
	tags: [String],
	createdAt: { type: Date, default: Date.now() },
});

// create a user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
	try {
		// create a new document
		// const newUser = await User.create({
		// 	name: "Evans Kimunai",
		// 	email: "kimunai@email.com",
		// 	age: 29,
		// 	isActive: true,
		// 	tags: ["manager", "designer"],
		// });

		//const newUser = new User({
		// 	name: "Evans Kimunai",
		// 	email: "kimunai@email.com",
		// 	age: 29,
		// 	isActive: true,
		// 	tags: ["manager", "designer"],
		// });
		// await newUser.save();
		// console.log("created new user", newUser);

		//get all users
		const allUsers = await User.find({});
		console.log(allUsers);
	} catch (error) {
		console.log("Error ->", error);
	} finally {
		await mongoose.connection.close();
	}
}

runQueryExamples();
