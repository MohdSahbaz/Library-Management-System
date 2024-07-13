import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader/Loader";

export default function Latest() {
  const [latestBook, setLatestBook] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/books/latest`
        );
        const data = response.data;
        data.reverse();
        const onlySixBook = data.slice(0, 5);
        setLatestBook(onlySixBook);
        setLoader(false);
        if (onlySixBook.length === 0) {
          setError("0 Books");
        }
      } catch (e) {
        setError("Error While Fetching Data " + e.message);
        setLoader(false);
      }
    };
    fetchBooks();
  }, []);

  const singleBookHandler = (bookname, id) => {
    navigate(`/lms/${bookname}/${id}`);
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="font-bold text-xl text-white">Latest</h1>
      <div className="flex gap-4 flex-wrap mt-2 justify-center md:justify-normal">
        {error && <h1>{error}</h1>}
        {latestBook.map((book, index) => (
          <div
            onClick={() => singleBookHandler(book.Name, book._id)}
            key={index}
            className="py-2 m-1 px-2 bg-slate-300 bg-opacity-50 rounded-lg border-2 border-slate-300 hover:border-red-400 transition-all"
            style={{ minWidth: "150px", maxWidth: "150px" }}
          >
            <img
              src={book.ImageUrl}
              alt={book.Name}
              className="w-36 h-48 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <b>Name:</b> {book.Name}
              <br />
              <b>Auther:</b> {book.Author_Name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
