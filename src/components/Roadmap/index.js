import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  RoadmapCard,
  RoadmapContainer,
  RoadmapH1,
  RoadmapWrapper,
  RoadmapIcon,
  RoadmapH2,
  RoadmapP,
} from "./RoadmapElements";

const Roadmap = () => {
  return (
    <RoadmapContainer id="roadmap">
      <RoadmapH1>Your Roadmap</RoadmapH1>
      <RoadmapWrapper>
        <RoadmapCard>
          <RoadmapIcon src={Icon1} />
          <RoadmapH2>Roadmap Item 1</RoadmapH2>
          <RoadmapP>bore et dolore magna aliqua. Ut enim ad minim</RoadmapP>
        </RoadmapCard>
        <RoadmapCard>
          <RoadmapIcon src={Icon2} />
          <RoadmapH2>Roadmap Item 2</RoadmapH2>
          <RoadmapP>bore et dolore magna aliqua. Ut enim ad minim</RoadmapP>
        </RoadmapCard>
        <RoadmapCard>
          <RoadmapIcon src={Icon3} />
          <RoadmapH2>Roadmap Item 3</RoadmapH2>
          <RoadmapP>bore et dolore magna aliqua. Ut enim ad minim</RoadmapP>
        </RoadmapCard>
      </RoadmapWrapper>
    </RoadmapContainer>
  );
};

export default Roadmap;
