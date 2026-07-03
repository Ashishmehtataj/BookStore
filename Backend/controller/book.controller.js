import Book from "../model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);  // ✅ fixed
  } catch (error) {
    console.error("Error : " + error.message);
    return res.status(500).json({ error: error.message });
  }
};