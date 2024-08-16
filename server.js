import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./routes/routes.js";  // Ensure the file extension is included

// Server Linking
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: "https://localhost:5000/", // only doing the backend
    credentials: true
}));
app.use(express.json());

// MongoDB connection
const URI = "mongodb+srv://gurnessh:gurnessh@cluster0.ymvpxqk.mongodb.net/300374667-Gurnessh";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Router linking
app.use("/", router);

// Server run
app.listen(port, () => {
    console.log(`Server running on port ${port}`);  
});
