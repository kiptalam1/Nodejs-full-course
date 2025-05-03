require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");

//connect to mongo db
connectToDb();

// initialize app
const app = express();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);

//listen to port
app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}`);
});
