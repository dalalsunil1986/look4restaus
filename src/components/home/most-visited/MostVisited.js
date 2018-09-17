import React from "react";

const MostVisited  = props => {
  return (
    <div className="flat-product">
      <div className="featured-product">
        <img src="images/services/1.jpg" alt="image" />
        <div className="time bg-green">
          Now Open
        </div>
        <div className="rate-product">
          <div className="link-review clearfix">
            <div className="button-product float-left">
              <button type="button" className="flat-button" onclick="location.href='#'">bar & coffe</button>
            </div>
            <div className="start-review float-right">
              <span className="flat-start">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <a href="#" className="review">( 2 reviewers )</a>
            </div>
          </div>
          <div className="info-product">
            <h6 className="title"><a href="#">Grand Prairie Restaurants</a></h6>
            <p>208 W 70th Street, New York, NY</p>
            <a href="#" className="heart">
              <i className="ion-android-favorite-outline"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="content-product">
        <div className="tm">
          TM
        </div>
        <div className="text">
          <p>Nullam ultricies urna id ornare interdum. Maec enas ut suscipit mauris</p>
        </div>
      </div>
    </div>
  )
}

export default MostVisited;
