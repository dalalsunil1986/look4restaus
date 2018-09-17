import React from "react";

//import required components
import SlidingBanner from "./sliding-banner/SlidingBanner";
import {RestausCategories} from "./restaus-categories/RestausCategoriesContainer";
import {MostVisited} from "./most-visited/MostVisitedContainer";
import Wrapper from "../../HOC/Wrapper";


const Home = props => {
  return(
    <Wrapper>
      <SlidingBanner />
      <div className="container">
        <div className="wrap-form">
          <div className="flat-formsearch ">
            <form novalidate="" className="search-form form-filter clearfix" id="searchform" method="post" action="#">
              <span className="input-question">
                <input type="text" placeholder="What are your looking for ?" name="question" id="question" />
              </span>
              <span className="input-location">
                <input type="text" placeholder="Location" name="location" id="location" />
                <span className="filter">
                  <input id="ex8" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="10" data-slider-step="1" data-slider-value="5"/>
                </span>
              </span>
              <span className="select">
                <select>
                  <option>All Categories </option>
                  <option>Hotel & Travel</option>
                  <option>Restaurant</option>
                  <option>Healthy & Fitness</option>
                  <option>Food & Coffe</option>
                </select>
              </span>
              <span className="form-submit text-right">
                <button className="flat-button">Search <i className="ion-ios-search-strong"></i></button>
              </span>
            </form>
          </div>
        </div>
      </div>
      <RestausCategories />
      <MostVisited />
    </Wrapper>
  );
}

export default Home;
