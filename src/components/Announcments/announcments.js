import React from "react";
import "./announcements.css"
const Announce = () => {
  return (
    <div className="announcement">
    <h2> Announcements </h2>
    <div className="m-1" style={{ display: "flex" }}>
      <div className="card" style={{ width: "18rem", marginLeft: "2rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            IIITDMJ students bag medals at sports meet
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginLeft: "2rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            International yoga day clebration at IIITDMJ
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginLeft: "2rem" }}>
        <div className="card-body">
          <h5 className="card-title">IIITDMJ Students visit japan</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginLeft: "2rem" }}>
        <div className="card-body">
          <h5 className="card-title">IIITDMJ Students at sports</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Announce;
