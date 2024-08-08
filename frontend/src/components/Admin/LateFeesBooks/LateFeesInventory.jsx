import { Link, Outlet } from "react-router-dom";

// Navigation Part/Header
export default function LateFeesInventory() {
  return (
    <div className="w-full">
      {/* Book Inventory Header(Navigation Menu) */}
      <div className="py-5 px-5 flex md:justify-start justify-center items-center gap-1 bg-slate-700">
        <BookLink to={"/admin/fine"} label="All Late Books" />
      </div>
      {/* Member Component show here in outlet according to navigation */}
      <Outlet />
    </div>
  );
}

// Styling for single navigation link button
const BookLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-gray-50 text-lg rounded-md bg-slate-600 hover:bg-slate-900 py-2 px-4 transition"
    >
      {label}
    </Link>
  );
};
