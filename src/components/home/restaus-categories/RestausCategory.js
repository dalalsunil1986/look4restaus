import React from "react";

const RestausCategory = props => {
  return (
    <div className="client">
      <div className="featured-client">
        <img src="images/clients/1.jpg" alt="image" />
      </div>
      <div className="content-client clearfix">
        <div className="icon">
          <img src="images/clients/icon1.png" alt="image" />
        </div>
        <div className="text">
          <h6><a href="#" title="">Hotel & Travel</a></h6>
          <p>45 Listing</p>
        </div>
      </div>
    </div>
  )
}

export default RestausCategory;
