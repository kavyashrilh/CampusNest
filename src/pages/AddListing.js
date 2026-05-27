import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddListing() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    location: "",
    rent: "",
    facilities: "",
    rating: "",
    available: true
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/pg/addListing", {
      ...form,
      facilities: form.facilities.split(","), // convert string → array
      rating: Number(form.rating),
      rent: Number(form.rent),
      available: form.available === "true" || form.available === true
    })
    .then(res => {
      alert("PG Added Successfully 🚀");
       navigate("/"); 
      console.log(res.data);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Add PG Listing</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">

        <input name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} />

        <input name="location" placeholder="Location" className="form-control mb-2" onChange={handleChange} />

        <input name="rent" placeholder="Rent" className="form-control mb-2" onChange={handleChange} />

        <input name="facilities" placeholder="Facilities (comma separated)" className="form-control mb-2" onChange={handleChange} />

        <input name="rating" placeholder="Rating" className="form-control mb-2" onChange={handleChange} />

        <select name="available" className="form-control mb-3" onChange={handleChange}>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>

        <button className="btn btn-success">Add PG</button>
      </form>
    </div>
  );
}

export default AddListing;