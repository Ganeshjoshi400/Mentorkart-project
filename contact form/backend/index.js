const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit the application on connection error
  });

// Import routes
// const authRoutes = require("./routes/authentication");
const formRoutes = require("./routes/form data");

// app.use("/auth", authRoutes);
app.use("/form-data", formRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(8000, () => console.log("Server is running at: 8000"));
