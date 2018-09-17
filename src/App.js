import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import required components
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import SlidingBanner from "./components/sliding-banner/SlidingBanner";
import RestausCategories from "./components/RestausCategories/RestausCategoriesContainer"

//Import required HOCs
import Wrapper from "./HOC/Wrapper";

class App extends Component {
  rev_slider_1078_1_wrapperStyle = {
    margin:"0px auto",
    backgroundColor:"transparent",
    padding:"0px",
    marginTop:"0px",
    marginBottom:"0px",
  }

  render() {
    return (
      <Wrapper>
        <Preloader />

        <div className="boxed" id="home">
          <Header />
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

          <section className="flat-row section-product bg-theme">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-section text-center">
                    <h1 className="title">Most Visited Places</h1>
                    <div className="sub-title">
                      Some great addresses you should not miss
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="wrap-flat-product clearfix">
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

                  <div className="flat-product">
                    <div className="featured-product">
                      <img src="images/services/2.jpg" alt="image" />
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
                          <h6 className="title"><a href="#">San Antonio Restaurants</a></h6>
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

                  <div className="flat-product">
                    <div className="featured-product">
                      <img src="images/services/5.jpg" alt="image" />
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
                          <h6 className="title"><a href="#">Beaumont Restaurants</a></h6>
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
                  <div className="load-more text-center">
                    <button type="button" className="flat-button">Load More</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer footer-widgets">
            <div className="container">
              <div className="bottom">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="copyright">
                      <p>Copyright © 2017. Designer by <a href="https://themeforest.net/user/themesflat/portfolio">Themesflat</a>. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="social-links float-right">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="modal fade flat-popupform" id="popup_login">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div className="modal-body text-center clearfix">
                  <form className="form-login form-listing" action="#" method="post">
                    <h3 className="title-formlogin">Log in</h3>
                    <span className="input-login icon-form"><input type="text" placeholder="Your Name*" name="email" required="required" /><i className="fa fa-user"></i></span>
                    <span className="input-login icon-form"><input type="text" placeholder="Password*" name="password" required="required" /><i className="fa fa-lock"></i></span>
                    <div className="flat-fogot clearfix">
                      <label className="float-left">
                        <span className="input-check">
                          <input type="checkbox" id="rem" name="check" value="0" checked="" />
                          <label for="rem" className="remember">Remember me</label>
                        </span>
                      </label>
                      <label className="float-right link-register">
                        <a href="#">Lost your password?</a>
                      </label>
                    </div>
                    <span className="wrap-button">
                      <button type="button" id="login-button" className=" login-btn effect-button" title="log in">LOG IN</button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade flat-popupform" id="popup_register">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div className="modal-body text-center clearfix">
                  <form className="form-login form-listing" action="#" method="post">
                    <h3 className="title-formlogin">Sign Up</h3>
                    <span className="input-login icon-form"><input type="text" placeholder="Your Name*" name="name" required="required" /><i className="fa fa-user"></i></span>
                    <span className="input-login icon-form"><input type="text" placeholder="E-mail*" name="email" required="required" /><i className="fa fa-envelope-o"></i></span>
                    <span className="input-login icon-form"><input type="text" placeholder="Password*" name="password" required="required" /><i className="fa fa-lock"></i></span>
                    <span className="input-login icon-form"><input type="text" placeholder="Repeat Password*" name="password" required="required" /><i className="fa fa-lock"></i></span>
                    <div className="wrap-button signup">
                      <button type="button" id="logup-button" className=" login-btn effect-button" title="log in">LOG UP</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <a className="go-top effect-button">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </Wrapper>
    );
  }
}

export default App;
