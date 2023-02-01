import {
  BackgroundDiv,
  StyledDiv,
  StyledH1,
  StyledH2,
  StyledImg,
} from "../Components/StyledComponents";
import { activitesArr } from "./FrontpageFiles/FrontpageArray";
import image from "../Images/image.jpg";

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
                <p>{item.desc}</p>
              </StyledDiv>
            );
          })}
        </StyledDiv>
      </StyledDiv>
      <StyledDiv guideContainer>
        <StyledDiv guideOuterDiv>
          <StyledImg
            title="image taken from thispersondoesnotexist"
            guide
            src={image}
          />
          <StyledDiv>
            <h3>Your guide</h3>
            <p>
              “I have lived at Sofia for over 30 years, so I can show you all of
              its best parts and hidden secrets.”
            </p>
            <h3>Zaid Mirjana</h3>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </section>
  );
};
