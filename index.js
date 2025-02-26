// import dotenv from "dotenv";
// import connectDB from "./LOTTO/backend/src/config/db.js";

// dotenv.config();


// (async () => {
//     await connectDB();
// })
import express from "express"; // Use import instead of require

const app = express();
const PORT = process.env.PORT || 3000; // Get the port from environment variables

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
