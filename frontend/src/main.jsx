import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Style Component
import "./index.css";

// App Component
import App from "./App.jsx";

// Welcome Component
import { Welcome } from "./components/Welcome/Welcome.jsx";

// Books Component
import { BookInventory } from "./components/Books/BookInventory.jsx";
import { AllBooks } from "./components/Books/AllBooks.jsx";
import { AddBooks } from "./components/Books/AddBooks.jsx";
import { SingleBook } from "./components/Books/SingleBook.jsx";
import { UpdateBook } from "./components/Books/UpdateBook.jsx";

// Members/Users Component
import { MembersInventory } from "./components/Members/MembersInventory.jsx";
import { AllMembers } from "./components/Members/AllMembers.jsx";
import { SingleMember } from "./components/Members/SingleMember.jsx";
import { UpdateMember } from "./components/Members/UpdateMember.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Roots For WelcomePage
      {
        path: "/",
        element: <Welcome />,
      },
      // Roots For Books
      {
        path: "books",
        element: <BookInventory />,
        children: [
          {
            path: "",
            element: <AllBooks />,
          },
          {
            path: "add",
            element: <AddBooks />,
          },
          {
            path: "singlebook/:id",
            element: <SingleBook />,
          },
          {
            path: "update/:id",
            element: <UpdateBook />,
          },
        ],
      },
      // Roots For Users
      {
        path: "members",
        element: <MembersInventory />,
        children: [
          {
            path: "",
            element: <AllMembers />,
          },
          {
            path: "singlemember/:id",
            element: <SingleMember />,
          },
          {
            path: "update/:id",
            element: <UpdateMember />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
