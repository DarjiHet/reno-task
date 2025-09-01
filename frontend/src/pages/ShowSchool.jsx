import { useEffect, useState } from "react";
import { getSchools, deleteSchool, BACKEND_URL } from "../services/schoolService";
export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    loadSchools();
  }, []);

  const loadSchools = () => {
    getSchools().then((data) => {
      if (Array.isArray(data)) {
        setSchools(data);
      } else {
        console.error("Unexpected response:", data);
      }
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this school?")) {
      await deleteSchool(id);
      loadSchools(); // refresh list
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Schools Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schools.map((s) => (
          <div
            key={s.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col relative"
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(s.id)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
              title="delete School"
            >
              ✕
            </button>

            <img
              src={`${BACKEND_URL}${s.image}`}
              alt={s.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* School Details */}
            <h2 className="font-bold text-xl mb-2">{s.name}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Address:</span> {s.address}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">City:</span> {s.city}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">State:</span> {s.state}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Contact:</span> {s.contact}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {s.email_id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
