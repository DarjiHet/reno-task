import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchool";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">🏫 School Directory</h1>
        <div className="flex gap-4">
          <Link
            to="/"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
          >
            Home
          </Link>
          <Link
            to="/add"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
          >
            Add School
          </Link>
          <Link
            to="/show"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
          >
            Show Schools
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50 min-h-screen">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to the School Directory
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-8">
                Discover schools around you, view their details, or add a new
                school to the directory. Helping parents and students find the
                best options with ease.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/show"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Browse Schools
                </Link>
                <Link
                  to="/add"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
                >
                  Add a School
                </Link>
              </div>
            </div>
          }
        />

        {/* Other Pages */}
        <Route path="/add" element={<AddSchool />} />
        <Route path="/show" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}
