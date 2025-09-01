import { useState } from "react";
import { addSchool } from "../services/schoolService";

export default function AddSchool() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    const res = await addSchool(formData);
    alert(res.message);
    setForm({ name: "", address: "", city: "", state: "", contact: "", email_id: "", image: null });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add School</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input className="border p-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input className="border p-2" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <input className="border p-2" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        <input className="border p-2" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
        <input className="border p-2" name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required />
        <input className="border p-2" name="email_id" type="email" placeholder="Email" value={form.email_id} onChange={handleChange} required />
        <input className="border p-2" name="image" type="file" onChange={handleChange} required />
        <button className="bg-blue-600 text-white p-2 mt-2" type="submit">Add School</button>
      </form>
    </div>
  );
}
