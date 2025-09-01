export const BACKEND_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000"
    : "https://reno-task.onrender.com";

export const API_URL = `${BACKEND_URL}/api`;

//create a school
export const addSchool = async (formData) => {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    body: formData,
  });
  return res.json();
};

// get all school
export const getSchools = async () => {
  const res = await fetch(`${API_URL}`);
  return res.json();
};

// Delete a school
export const deleteSchool = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};