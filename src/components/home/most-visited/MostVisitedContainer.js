import React, {Component} from "react";

//import required components
import MostVisitedList from "./MostVisitedList"

class MostVisitedContainer extends Component{
  render(){
    return (
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
              <MostVisitedList />
              
              <div className="load-more text-center">
                <button type="button" className="flat-button">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export {MostVisitedContainer as MostVisited};
