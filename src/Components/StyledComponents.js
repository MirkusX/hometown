import styled from "styled-components";
import sofia from "../Images/sofia.avif";

export const BackgroundDiv = styled.div`
  background-image: url(${sofia});
  min-height: 48.790896159317214vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

export const StyledDiv = styled.div`
  background-color: #1d3557;
  border-radius: 10px;
  padding: 0 1em;
  ${(props) => {
    if (props.lightBlue)
      return `
    background: #457B9D;`;
  }}
  ${(props) => {
    if (props.inherit)
      return `
    background: inherit;
    display: flex;
    justify-content: center;`;
  }}
  ${(props) => {
    if (props.item)
      return `
    width: 50%;
    background: inherit;`;
  }}
`;

export const StyledImg = styled.img`
  width: 6.25em;
  height: 6.25em;
  border-radius: 50%;
`;
