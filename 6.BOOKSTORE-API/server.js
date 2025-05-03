const express = require("express");
require("dotenv").config();
const connectToDb = require("./database/db");
const bookRoutes = require("./routes/book-routes");
//initialize app
const app = express();
const PORT = process.env.PORT;

//connect to database
connectToDb();

//middleware
app.use(express.json());

//routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
	console.log(`server running at port ${PORT}`);
});
