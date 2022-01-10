import React from "react";
import "./card.css";

const Header = () => {
  
  return (
    <div className="container">
      <div className="card-header">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <p>
          <a href="#">
            <i className="fa fa-bars"></i>
          </a>
          <a href="#">
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-star" aria-hidden="true"></i>
          </a>
          <span className="float-right">
            <a href="#" className="navTask">
              Task
            </a>
            <a href="#" className="archive">
              Archive
            </a>
            <button className="btn search-btn">
            <i className="fa fa-search" aria-hidden="true" title="Search"></i>
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
