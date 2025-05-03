const mongoose = require("mongoose");

const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.CONNECTION_URI);
		console.log("mongo db is connected successfully");
	} catch (error) {
		console.error("Mongo db connection failed", error);
		process.exit(1);
	}
};

module.exports = connectToDb;
