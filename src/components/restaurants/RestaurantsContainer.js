import React, {Component} from "react";

import Wrapper from "../../HOC/Wrapper";

class RestaurantsContainers extends Component{
  render(){
    return (
      <Wrapper>
        <div className="page-title parallax parallax1">
            <div className="section-overlay">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-heading">
                            <h1 className="title">Listing</h1>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li> - </li>
                                <li>Listing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="main-content page-listing-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="flat-select clearfix">
                            <div className="float-left width50 clearfix">
                                <div className="one-three showing">
                                    <p><span>16</span> Found Listings</p>
                                </div>
                                <div className="one-three more-filter">
                                    <ul className="unstyled">
                                        <li className="current"><a href="#" className="title">More Fillter <i className="fa fa-angle-right"></i></a>
                                            <ul className="unstyled">
                                                <li className="en">
                                                    <input type="checkbox" id="wifi" name="category" />
                                                    <label for="wifi">Wifi</label>
                                                </li>
                                                <li className="en">
                                                    <input type="checkbox" id="smoking" name="category" />
                                                    <label for="smoking">Smoking allowed</label>
                                                </li>
                                                <li className="en">
                                                    <input type="checkbox" id="onl" name="category" />
                                                    <label for="onl">Online Reservation</label>
                                                </li>
                                                <li className="en">
                                                    <input type="checkbox" id="parking" name="category" checked="checked" />
                                                    <label for="parking">Parking street</label>
                                                </li>
                                                <li className="en">
                                                    <input type="checkbox" id="event" name="category" />
                                                    <label for="event">Events</label>
                                                </li>
                                                <li className="en">
                                                    <input type="checkbox" id="in" name="category" checked="checked" />
                                                    <label for="in">Elevator in building</label>
                                                </li>
                                                <li className="en">
                                                    <input type="checkbox" id="card" name="category" />
                                                    <label for="card">Credit Card Payment</label>
                                                </li>
                                            </ul>
                                         </li>
                                    </ul>
                                </div>
                                <div className="one-three sortby">
                                    <ul className="unstyled">
                                        <li className="current"><a href="#" className="title">Sort by: Random <i className="fa fa-angle-right"></i></a>
                                            <ul className="unstyled">
                                                <li className="en"><a href="#" title=""><i className="fa fa-caret-right"></i>Open Now</a></li>
                                                <li className="en"><a href="#" title=""><i className="fa fa-caret-right"></i>Most reviewed</a></li>
                                                <li className="en"><a href="#" title=""><i className="fa fa-caret-right"></i>Top rated</a></li>
                                                <li className="en"><a href="#" title=""><i className="fa fa-caret-right"></i>Random</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="float-right">
                                <div className="flat-sort">
                                    <a href="listing-list.html" className="course-list-view"><i className="fa fa-list"></i></a>
                                    <a href="listing-grid.html" className="course-grid-view active"><i className="fa fa-th"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row listing-grid">
                            <div className="col-md-6">
                                <div className="flat-product">
                                    <div className="featured-product">
                                        <img src="images/services/g1.jpg" alt="image" />
                                        <div className="time">
                                            Now Close
                                        </div>
                                        <div className="rate-product">
                                            <div className="link-review clearfix">
                                                <div className="button-product float-left">
                                                    <button type="button" className="flat-button" onclick="location.href='#'">Restautrant</button>
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
                                                <h6 className="title"><a href="listing-single.html">San Antonio Restaurants</a></h6>
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
                            </div>
                            <div className="col-md-6">
                                <div className="flat-product">
                                    <div className="featured-product">
                                        <img src="images/services/g1.jpg" alt="image" />
                                        <div className="time bg-green">
                                            Now Open
                                        </div>
                                        <div className="rate-product">
                                            <div className="link-review clearfix">
                                                <div className="button-product float-left">
                                                    <button type="button" className="flat-button" onclick="location.href='#'">bar &amp; coffe</button>
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
                                                <h6 className="title"><a href="listing-single.html">Grand Prairie Restaurants</a></h6>
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
                            </div>
                            <div className="col-md-6">
                                <div className="flat-product">
                                    <div className="featured-product">
                                        <img src="images/services/g3.jpg" alt="image" />
                                        <div className="time bg-green">
                                            Now Open
                                        </div>
                                        <div className="rate-product">
                                            <div className="link-review clearfix">
                                                <div className="button-product float-left">
                                                    <button type="button" className="flat-button" onclick="location.href='#'">Restautrant</button>
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
                                                <h6 className="title"><a href="listing-single.html">San Antonio Restaurants</a></h6>
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
                            </div>
                        </div>
                        <div className="blog-pagination style2 text-center">
                            <ul className="flat-pagination clearfix">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li className="next">
                                    <a href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <div className=" widget widget-form style2">
                                <h5 className="widget-title">
                                    Search Box
                                </h5>
                                <form novalidate="" className="filter-form clearfix" id="filter-form" method="post" action="#">
                                    <p className="book-notes">
                                        <input type="text" placeholder="What are you looking for?" name="question" required="" />
                                    </p>
                                    <p className="book-form-select icon">
                                        <select className=" dropdown_sort">
                                            <option value="">All Categories</option>
                                            <option value="">Hotel & travel</option>
                                            <option value="">Real Estate</option>
                                            <option value="">Restaurant</option>
                                            <option value="">Healthy & Fitness</option>
                                            <option value="">Food and coffee</option>
                                            <option value="">Drinks</option>
                                        </select>
                                        <i className="fa fa-angle-down"></i>
                                    </p>
                                    <p className="book-form-address icon">
                                        <input type="text" placeholder="Address" name="address" required="" />
                                        <i className="ion-android-locate"></i>
                                    </p>
                                    <p className="location">Location <i className="ion-location float-right"></i></p>
                                    <p className="input-location form-filter">
                                        <span className="filter">
                                            <input id="ex8" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="10" data-slider-step="1" data-slider-value="5" />
                                        </span>
                                    </p>
                                    <p className="form-submit text-center">
                                        <button className="flat-button">Search <i className="ion-ios-search-strong"></i></button>
                                    </p>
                                </form>
                            </div>
                            <div className="widget widget-map">
                                <h5 className="widget-title">Map</h5>
                                <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie.</p>
                                <div className="flat-maps">
                                    <div className="maps" style={{width: "100%", height: "359px"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Wrapper>
    )
  }
}

export {RestaurantsContainers as Restaurants}
