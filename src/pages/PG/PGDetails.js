import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


// const handleDelete = async () => {
//   try {
//     await axios.delete(`http://localhost:8080/pg/${id}`);
//     alert("PG deleted successfully");
//     window.location.href = "/"; // redirect after delete
//   } catch (err) {
//     console.log(err);
//   }
// };
// function PGDetails(){
//     const {id}=useParams();
//     const[pg,setPg]=useState(null);
//     useEffect(()=>{
//         axios.get(`http://localhost:8080/pg/${id}`)
//         .then(res=>setPg(res.data))
//       .catch(err => console.log(err));
//  },[id]);
//   if (!pg) return <h2>Loading...</h2>;
//  const isAvailable =
//   pg.available === true ||
//   pg.available === "true" ||
//   pg.available === 1 ||
//   pg.available === "1";
//   console.log("PG DATA:", pg);
 
//     return(
//          <div className="container mt-5">
//             {/* <img src="" /> */}
//       <h2>{pg.name}</h2>
//       <p>📍 {pg.location}</p>
//       <p>💰 ₹{pg.rent}</p>
//       <p>⭐ {pg.rating}</p>
//      <p>
//   {pg.facilities?.map((item, index) => (
//   // <span key={index} className="badge bg-secondary me-1 fs-4">
//   //   {item}
//   // </span>
//   <span className="badge bg-white text-dark me-1 fs-4">{item}</span>  
  
//   ))}
// </p>


// <p>{isAvailable ? "Available ✅" : "Not Available ❌"}</p>
// <button className="btn btn-danger" onClick={handleDelete}>
//   Delete
// </button>
//     </div>
   
    
//     )

// }
// export default PGDetails;

function PGDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pg, setPg] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/pg/${id}`)
      .then(res => setPg(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:8080/pg/${id}`);
    alert("Deleted successfully");
    navigate("/"); // better than window.location
  } catch (err) {
    console.log(err);
  }
};

  if (!pg) return <h2>Loading...</h2>;

  const isAvailable =
    pg.available === true ||
    pg.available === "true" ||
    pg.available === 1 ||
    pg.available === "1";

  return (
    <div className="container mt-5">
      <h2>{pg.name}</h2>
      <p>📍 {pg.location}</p>
      <p>💰 ₹{pg.rent}</p>
      <p>⭐ {pg.rating}</p>

      <p>
        {pg.facilities?.map((item, index) => (
          <span key={index} className="badge bg-white text-dark me-1 fs-4">
            {item}
          </span>
        ))}
      </p>

      <p>{isAvailable ? "Available ✅" : "Not Available ❌"}</p>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default PGDetails;