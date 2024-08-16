import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Art = mongoose.model("BookDB", newSchema);

export default Art;
