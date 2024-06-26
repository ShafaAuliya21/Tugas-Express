import { db } from "../database/database.js";

const getAllNotes = async () => {
  try {
    const query = "SELECT * FROM notes";
    const [response] = await db.execute(query);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getNotesById = async (id) => {
  try {
    const query = `SELECT * FROM notes WHERE id = ?`;
    const [response] = await db.execute(query, [id]);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const addNotes = async (body) => {
  const { title, datetime, note } = body;
  try {
    const query = "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)";
    const [response] = await db.execute(query, [title, datetime, note]);
    return response;
  } catch (error) {
    console.error(`Error insert data: ${error}`);
    throw error;
  }
};

const updateNotes = async (body, id) => {
  const { title, datetime, note } = body;
  try {
    const query = "UPDATE notes SET title=?, datetime=?, note=? WHERE id=?";
    const [response] = await db.execute(query, [title, datetime, note, id]);
    return response;
  } catch (error) {
    console.error(`Error update data: ${error}`);
    throw error;
  }
};

const deleteNotes = async (id) => {
  try {
    const query = "DELETE FROM notes WHERE id=?";
    const [response] = await db.execute(query, [id]);
    return response;
  } catch (error) {
    console.error(`Error delete data: ${error}`);
    throw error;
  }
};

export default {
  getAllNotes,
  getNotesById,
  addNotes,
  updateNotes,
  deleteNotes,
};
