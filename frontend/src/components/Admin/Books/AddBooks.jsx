import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddBooks() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Author_Name, setAuthorName] = useState("");
  const [Categories, setCategories] = useState("");
  const [std, setStd] = useState("");
  const [isPhysical, setIsPhysical] = useState("");
  const [isEbook, setIsEbook] = useState("");
  const [Availability, setAvailability] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [DownloadUrl, setDownloadUrl] = useState("");
  // to change the loading button text
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const createBook = {
      Name,
      Author_Name,
      Categories: Categories.toLowerCase().trim(),
      std: std.toLowerCase().trim(),
      isPhysical: isPhysical.toLowerCase().trim(),
      isEbook: isEbook.toLowerCase().trim(),
      Availability,
      ImageUrl,
      DownloadUrl,
    };

    try {
      await axios.post("http://localhost:3000/api/books", createBook);
      setLoading(false);
      navigate("/admin/books");
    } catch (error) {
      console.log("Error while adding book: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-8 bg-slate-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Add Book</h1>
      <form
        className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className={labelStyle}>
            Name
          </label>
          <input
            type="text"
            name="Name"
            id="name"
            value={Name}
            placeholder="Book Name"
            required
            className={inputStyle}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author_name" className={labelStyle}>
            Author Name
          </label>
          <input
            type="text"
            name="Author_Name"
            id="author_name"
            value={Author_Name}
            placeholder="Author Name"
            required
            className={inputStyle}
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categories" className={labelStyle}>
            Categories
          </label>
          <input
            type="text"
            name="Categories"
            id="categories"
            value={Categories}
            placeholder="Categories (Ex: School, College, Higher or Others)"
            required
            className={inputStyle}
            onChange={(e) => {
              setCategories(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="std" className={labelStyle}>
            Standard
          </label>
          <input
            type="text"
            name="std"
            id="std"
            value={std}
            placeholder="Enter Standard (Ex: 10th) or Empty"
            className={inputStyle}
            onChange={(e) => {
              setStd(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className={labelStyle}>P-Book Available</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                name="isPhysical"
                value="true"
                checked={isPhysical === "true"}
                onChange={(e) => setIsPhysical(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isPhysical"
                value="false"
                checked={isPhysical === "false"}
                onChange={(e) => setIsPhysical(e.target.value)}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className={labelStyle}>E-Book Available</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                name="isEbook"
                value="true"
                checked={isEbook === "true"}
                onChange={(e) => setIsEbook(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isEbook"
                value="false"
                checked={isEbook === "false"}
                onChange={(e) => setIsEbook(e.target.value)}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="availability" className={labelStyle}>
            Book Qty
          </label>
          <input
            type="number"
            name="Availability"
            id="availability"
            value={Availability}
            placeholder="Total books"
            required
            className={inputStyle}
            onChange={(e) => {
              setAvailability(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className={labelStyle}>
            Book Image
          </label>
          <input
            type="text"
            name="ImageUrl"
            id="imageUrl"
            value={ImageUrl}
            placeholder="Enter Image Link"
            required
            className={inputStyle}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="downloadUrl" className={labelStyle}>
            Book PDF
          </label>
          <input
            type="text"
            name="DownloadUrl"
            id="downloadUrl"
            value={DownloadUrl}
            placeholder="Enter Pdf Link"
            required
            className={inputStyle}
            onChange={(e) => {
              setDownloadUrl(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

// Common Styles for label and input tags
const labelStyle = "block text-gray-700 text-sm font-bold mb-2";
const inputStyle =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
