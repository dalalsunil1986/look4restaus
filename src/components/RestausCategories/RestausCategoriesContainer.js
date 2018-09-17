import React,{Component} from "react";

import RestausCategoriesList from "./RestausCategoriesList";

class RestausCategoriesContainer extends Component{
  render(){
    return(
      <section className="flat-row section-client">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section text-center">
                <h1 className="title">Categories</h1>
                <div className="sub-title">
                  What do you need to find?
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RestausCategoriesList />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export {RestausCategoriesContainer as RestausCategories};
