import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

//Import required components
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import {Restaurants} from "./components/restaurants/RestaurantsContainer"

//Import required HOCs
import Wrapper from "./HOC/Wrapper";
import ErrorBoundary from "./HOC/ErrorBoundary";

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
      <ErrorBoundary>
        <Wrapper>
          <Preloader />

          <div className="boxed" id="home">
            <Header />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/restaurants" components={Restaurants} />
            </Switch>
            <Footer />

            <a className="go-top effect-button">
              <i className="fa fa-angle-up"></i>
            </a>
          </div>
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

export default App;
