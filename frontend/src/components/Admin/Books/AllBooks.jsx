import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Loader from "../Loader/Loader";

const API_URL = import.meta.env.VITE_APP_API_URL;

export default function AllBooks() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  // if book load slow then loading work
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/books`);
        const bookData = response.data;
        setBooks(bookData);
        if (bookData.length === 0) {
          setError("No books available.");
        }
      } catch (error) {
        setError("Error While Fetching Books " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // Loader Page Will Run Untill Book Not Get Fetched
  if (loading) {
    return <Loader />;
  }

  const singleBookHandler = (bookid) => {
    navigate(`/admin/books/singlebook/${bookid}`);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center py-4 text-white">
        <h1 className="text-3xl font-bold mb-2 text-white">All Book</h1>
        <p className="font-bold">Total {books.length} Books</p>
        {error && <h1>{error}</h1>}
        <div className=" px-2 mt-2 flex flex-wrap justify-center">
          {books.map((book, index) => (
            <div
              onClick={() => singleBookHandler(book._id)}
              key={index}
              className="py-2 m-1 px-2 bg-[rgb(97,151,139)] bg-opacity-50 hover:bg-opacity-40 cursor-pointer text-white rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-all flex gap-2 min-w-full"
            >
              <img
                src={book.ImageUrl}
                alt={book.Name}
                className="h-28 object-cover rounded-t-lg "
              />
              <div className="p-2">
                <b>Name:</b> {book.Name}
                <br />
                <b>Author:</b> {book.Author_Name}
                <br />
                <b>Available:</b> {book.Availability}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
