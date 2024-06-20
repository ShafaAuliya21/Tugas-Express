import { json } from "express";
import NotesModel from "../models/notesModel.js";

const getAllNotes = async (req, res) => {
  try {
    const data = await NotesModel.getAllNotes();
    res.status(200).json({
      message: "Berhasil",
      data: data,
    });
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    res.status(500).json({
      message: "Terjadi Kesalahan",
      data: [],
    });
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await NotesModel.getNotesById(id);
    res.status(200).json({
      message: `Berhasil`,
      data: data,
    });
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    res.status(500),
      json({
        message: `Terjadi Kesalahan`,
        data: [],
      });
  }
};

//Tambah
const addNotes = async (req, res) => {
  const { body } = req;
  if (!body.title || !body.datetime || !body.note) {
    res.status(400).json({
      message: "Data Tidak Lengkap!",
    });
  }
  try {
    const data = await NotesModel.addNotes(body);
    res.status(201).json({
      message: "Data Berhasil Ditambah",
      data: body,
    });
  } catch (error) {
    console.error(`Error when insert data: ${error}`);
    res.status(500),
      json({
        message: `Terjadi Kesalahan`,
        data: [],
      });
  }
};

//Update
const updateNotes = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  console.log(id);
  if (!body.title || !body.datetime || !body.note) {
    res.status(400).json({
      message: "Data Tidak Lengkap!",
    });
  }
  try {
    const data = await NotesModel.updateNotes(body, id);
    res.status(201).json({
      message: `Data Berhasil Diubah`,
      data: body,
    });
  } catch (error) {
    console.error(`Error update data: ${error}`);
    res.status(500),
      json({
        message: `Terjadi Kesalahan`,
        data: [],
      });
  }
};

//Delete
const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await NotesModel.deleteNotes(id);
    res.status(200).json({
      message: `Data Berhasil Dihapus!`,
      data: [],
    });
  } catch (error) {
    console.error(`Error delete data: ${error}`);
    res.status(500),
      json({
        message: `Terjadi Kesalahan`,
        data: [],
      });
  }
};

export default {
  getAllNotes,
  getNotesById,
  addNotes,
  updateNotes,
  deleteNotes,
};
