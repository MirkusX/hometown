import {
  BackgroundDiv,
  StyledDiv,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledImg,
  StyledP,
} from "../Components/StyledComponents";
import { activitesArr } from "./FrontpageFiles/FrontpageArray";
import street from "../Images/street.webp";

export const Frontpage = () => {
  return (
    <section>
      <BackgroundDiv>
        <StyledDiv>
          <StyledH1>Visit Liberty City</StyledH1>
        </StyledDiv>
        <StyledDiv lightBlue>
          <StyledH1 smallH1>Great To Visit, Even Better To Leave</StyledH1>
        </StyledDiv>
      </BackgroundDiv>
      <StyledDiv inherit>
        <StyledH1 mediumH1>Districts</StyledH1>
        <StyledDiv itemContainer>
          {activitesArr.map((item, index) => {
            return (
              <StyledDiv item key={index}>
                <StyledImg src={item.image} />
                <StyledH2>{item.title}</StyledH2>
                <StyledH2>{item.subtitle}</StyledH2>
                <StyledP>{item.desc}</StyledP>
              </StyledDiv>
            );
          })}
        </StyledDiv>
      </StyledDiv>
      <StyledDiv guideContainer>
        <StyledDiv guideOuterDiv>
          <StyledImg title="not an actual person" guide src={street} />
          <StyledDiv guideInner>
            <StyledH3>Your guide</StyledH3>
            <StyledP guideQuote>
              “Hey, hey, you gotta listen to me, you gotta hear me, are you
              listening? It's not real man! It's a lie, it's all lies. The
              government lies to us. They put robots in the drinking water, they
              put spies in the toilets - to watch us! You think it's a joke, the
              joke's on you, they're killing you! You are being harvested by a
              marketing machine! You're not free, you're slaves! Freedom is a
              lie! They use drugs to control you, they did it to me for a long
              time. You need love! I need you, you need me, I love you! Love me
              back!”
            </StyledP>
            <StyledH3 guideName>Soapboxer</StyledH3>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </section>
  );
};
