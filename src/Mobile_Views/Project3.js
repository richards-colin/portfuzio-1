import React from "react";
import styled from "styled-components";
import ProjectPage from "../Mobile_Components/ProjectPage";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";
import TopBorder from "../Mobile_Components/TopBorder";
import LeftBorderBackBtn from "../Mobile_Components/LeftBorderBackBtn";
import RightBorder from "../Mobile_Components/RightBorder";
import YellowBasketball from '../images/yellowbasketball.jpg';
import Localfluence1 from '../images/localfluence_login.PNG';
import Localfluence2 from '../images/localfluence_offer.PNG';
import Localfluence3 from '../images/localfluence_offer.PNG';
import Jazz from "../images/jazzGame.JPG"
import Court from "../images/court.jpg"
import Hoop from "../images/hoop.jpg"

const BottomBorder = styled.div`
height: 4rem;
width: 100%;
display: grid;
grid-template-rows: 10% auto 10%;
background-color: white;
position: fixed;
bottom: 0;
z-index: 9999;
`;

const Project3 = () => {
  return (
    <>
      <Desktop>
        <TopBorder sectionTitle={"Project 3"} />
        <LeftBorderBackBtn />
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <ProjectPage
          bgColor={{ backgroundColor: "#00471B" }}
          projectTitle={"React Memory Game"}
          siteDescription={"A memory game that uses React.js"}
          responsive={"technologies"}
          responsiveResponse={"React.js"}
          technologies={"responsive"}
          technologiesResponse={"mobile responsive"}
          planning={"Planning"}
          planningResponse={"planned out in a planner"}
          bgImage={{ backgroundImage: `url(${YellowBasketball})` }}
          image1={{ backgroundImage: `url(${Hoop})` }}
          image2={{ backgroundImage: `url(${Court})` }}
          image3={{ backgroundImage: `url(${Jazz})` }}
          sectionTitle={"React Memory Game"}
          sectionText={"This is a game that is built using React.js. In this game the user is trying to pick everyone on the Utah Jazz roster just once. If there is a duplicate pick then the game will reset."}
          link={"https://colinrhysrichards.github.io/Memory-Game-React/"}
        />
      </Desktop>
      <Mobile>
        <ProjectPage
          bgColor={{ backgroundColor: "#00471B" }}
          projectTitle={"React Memory Game"}
          siteDescription={"A memory game that uses React.js"}
          responsive={"technologies"}
          responsiveResponse={"React.js"}
          technologies={"responsive"}
          technologiesResponse={"mobile responsive"}
          planning={"Planning"}
          planningResponse={"planned out in a planner"}
          bgImage={{ backgroundImage: `url(${YellowBasketball})` }}
          image={{ backgroundImage: `url(${Jazz})` }}
          // image2={{ backgroundImage: `url(${Localfluence2})` }}
          // image3={{ backgroundImage: `url(${Localfluence3})` }}
          sectionTitle={"React Memory Game"}
          sectionText={"This is a game that is built using React.js. In this game the user is trying to pick everyone on the Utah Jazz roster just once. If there is a duplicate pick then the game will reset."}
          link={"https://colinrhysrichards.github.io/Memory-Game-React/"}
        />
      </Mobile>
    </>
  );
};

export default Project3;
