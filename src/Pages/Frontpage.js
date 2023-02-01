import {
  BackgroundDiv,
  StyledDiv,
  StyledImg,
} from "../Components/StyledComponents";
import { activitesArr } from "./FrontpageFiles/FrontpageArray";

export const Frontpage = () => {
  return (
    <section>
      <BackgroundDiv>
        <StyledDiv>
          <h1>Visit Sofia</h1>
        </StyledDiv>
        <StyledDiv lightBlue>
          <h1>Enjoy culture in this vibrant city</h1>
        </StyledDiv>
      </BackgroundDiv>
      <StyledDiv inherit>
        <h1>Top three activities to do at Sofia</h1>
        <StyledDiv itemContainer>
          {activitesArr.map((item, index) => {
            return (
              <StyledDiv item key={index}>
                <StyledImg src={item.image} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </StyledDiv>
            );
          })}
        </StyledDiv>
      </StyledDiv>
      <StyledDiv></StyledDiv>
    </section>
  );
};
