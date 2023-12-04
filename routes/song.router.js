import express from "express";
import SongController from "../controllers/song.controller.js";

const router = express.Router();

// Kalder instans af klassen SongController
const song = new SongController();

// søg efter en sang
router.get("/songs/search/:keyword", (req, res) => {
	song.search(req, res);
});

export { router as SongRouter };
