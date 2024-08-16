import express from "express";
import Art from "../models/model.js";  

const router = express.Router();

// Getting books
router.get('/api/v1/book', async (req, res) => {
    try {
        const result = await Art.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Adding and saving book
router.post("/api/v1/book", async (req, res) => {
    const { bookName, bookAuthor, description } = req.body;

    try {
        const newArt = new Art({
            bookName,
            bookAuthor,
            description
        });

        await newArt.save();
        res.status(201).json(newArt);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

// Getting book by id
router.get("/api/v1/book/:id", async (req, res) => {
    try {
        const result = await Art.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Updating book by id
router.put("/api/v1/book/:id", async (req, res) => { 
    const id = req.params.id;
    const { bookName, bookAuthor, description } = req.body;
    try {
        const updateArt = await Art.findByIdAndUpdate(id, {
            bookName,
            bookAuthor,
            description
        }, { new: true });

        res.status(200).json(updateArt);    
    } catch (error) {
        res.status(500).json(error);
    }
});

// Deleting book by id
router.delete("/api/v1/book/:id", async (req, res) => {
    try {
        await Art.findByIdAndDelete(req.params.id); 
        res.status(200).json("Book Deleted"); 
    } catch (error) {
        res.status(500).json(error);
    }
});

// Adding bid to Art
// router.post("/:id/bid", async (req, res) => {
//     const id = req.params.id;
//     const { user, bid } = req.body;
//     try {
//         const updateArt = await Art.findByIdAndUpdate(id, {
//             $push: { bids: { user, bid } },
//         }, { new: true });

//         res.status(200).json(updateArt);    
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

export default router;
