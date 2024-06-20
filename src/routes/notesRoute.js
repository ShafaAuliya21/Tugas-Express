import express from "express";
const router = express.Router();

import notesModel from "../controllers/notesController.js";

router.get("/", notesModel.getAllNotes);
router.get("/:id", notesModel.getNotesById);
router.post("/", notesModel.addNotes);
router.put("/:id", notesModel.updateNotes);
router.delete("/:id", notesModel.deleteNotes);

export default router;