import styled from "styled-components";
import lc from "../Images/lc.webp";

export const BackgroundDiv = styled.div`
  background-image: url(${lc});
  min-height: 48.790896159317214vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  background-size: cover;
  background-position: center;
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
    background: #F1FAEE;
    display: flex;
    justify-content: center;
    flex-direction: column;`;
  }}
  ${(props) => {
    if (props.item)
      return `
    width: 25%;
    background: inherit;
    @media (max-width: 811px) {
      width: 100%;
    }`;
  }}
  ${(props) => {
    if (props.itemContainer)
      return `
    display: flex;
    justify-content: center;
    background: inherit;
    @media (max-width: 811px) {
      flex-direction: column;
      align-items: center;
    }`;
  }}
  ${(props) => {
    if (props.guideOuterDiv)
      return `
    width: 50%;
    margin: 3.125em;
    display: flex;
    padding: 1em;
    background: #A8DADC;
    display: flex;
    align-items: center;
    border-bottom: #1D3557 solid 6px;
    @media (max-width: 811px){
      flex-direction: column;
      margin: 3.125em 0;
      width: 100%;
    }
    `;
  }}
  ${(props) => {
    if (props.guideContainer)
      return `
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    `;
  }}
  ${(props) => {
    if (props.guideInner)
      return `
    background: inherit;
    width: 50%;
    @media (max-width: 811px){
      width: 100%;
    }
    `;
  }}
`;

export const StyledImg = styled.img`
  width: 6.25em;
  height: 6.25em;
  border-radius: 50%;
  ${(props) => {
    if (props.guide)
      return `
    width: 60%;
    height: auto;
    border-radius: 10px;`;
  }}
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
  color: white;
  ${(props) => {
    if (props.smallH1)
      return `
    font-size: 1.17rem;
    `;
  }}
  ${(props) => {
    if (props.mediumH1)
      return `
    font-size: 1.5rem;
    color: #1D3557;`;
  }}
`;

export const StyledH2 = styled.h2`
  font-size: 1rem;
  color: #1d3557;
`;

export const StyledP = styled.p`
  color: #1d3557;
  text-align: left;
  ${(props) => {
    if (props.guideQuote)
      return `
    text-align: center;
    font-style: italic;`;
  }}
`;

export const StyledH3 = styled.h3`
  font-size: 1.5rem;
  color: #1d3557;
  ${(props) => {
    if (props.guideName)
      return `
    font-size: 1rem;`;
  }}
`;
