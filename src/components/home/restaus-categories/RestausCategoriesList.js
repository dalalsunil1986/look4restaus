import React from "react";

//import required components
import RestausCategory from "./RestausCategory";

const RestausCategoriesList = () => {
    return (
      <div className="flat-client" data-item="4" data-nav="true" data-dots="false" data-auto="false">
        <RestausCategory />
        <RestausCategory />
        <RestausCategory />
        <RestausCategory />
      </div>
    )
};

export default RestausCategoriesList;
