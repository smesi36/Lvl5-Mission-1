// import packages (express, dotenv, cors)

require("dotenv").config();
const express = require("express");
const cors = require("cors");
// handles file uploads (middleware)
const multer = require("multer");
// axios
const axios = require("axios");
// Temporary file storage:
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

// --------------------- MIDDLEWARE --------------------- //

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);

// ------------------------ ROUTE ----------------------- //
app.post("/analyze", upload.single("image"), async (req, res) => {
  const imageBuffer = req.file.buffer;
  try {
    const response = await axios.post(
      process.env.CUSTOM_VISION_URL, //as per.env
      imageBuffer,
      {
        headers: {
          "Prediction-Key": process.env.CUSTOM_VISION_KEY,
          "Content-Type": "application/octet-stream",
        },
      }
    );
    res.status(200).json(response.data);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Image analysis failed' });
  }
});

// ------------------------ PORT ------------------------ //
const PORT = process.env.PORT || 4000;
app
  .listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log("Server Error - ❗", error);
  });
