import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PGList() {
  const [pgs, setPgs] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/pglist")
  //     .then(res => setPgs(res.data))
  //     .catch(err => console.log(err));
  // }, []);
    useEffect(() => {
    axios.get("http://localhost:8080/pglist")
    .then((res) => {
      console.log(res.data);
      setPgs(res.data);
    });
  }, []);

 return (
  <div className="container mt-5">
    <h2 className="text-center mb-4">🏠 PG Listings</h2>

    <div className="row">
      
      {pgs.map((pg) => (
        <div className="col-md-4 mb-4" key={pg._id}>
          <div className="card" style={{ width: "100%" }}>
                    
  {/* <img src="<%=  listing.image.url %>" class="card-img-top show-img" alt="listing_image"></img> */}
           {/* <img
  src="/media/images/lapimg.jpg"
  className="card-img-top"
  alt="PG"
/> */}

            <div className="card-body">
              <h5 className="card-title">{pg.name}</h5>
              <p>📍 {pg.location}</p>
              <p>💰 ₹{pg.rent}</p>
              <p>⭐ {pg.rating}</p>

             <Link to={`/pg/${pg._id}`} className="btn btn-primary">
  View Details
</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
    
}

export default PGList;