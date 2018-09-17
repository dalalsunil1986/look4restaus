import React from "react";

//import required components
import MostVisited from "./MostVisited";

//import required HOCs
import Wrapper from "../../../HOC/Wrapper";

const MostVisitedList = props => {
  return (
    <Wrapper>
      <MostVisited />
      <MostVisited />
      <MostVisited />
    </Wrapper>
  )
}

export default MostVisitedList;
