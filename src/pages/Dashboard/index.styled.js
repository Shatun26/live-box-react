import styled from 'styled-components';

export const DasboardContainer = styled.div`
  transition: background 1000ms;
  height: 100vh;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  flex-direction: column;
  perspective: 800px;
`;
export const AnimateBlock = styled.div`
  width: 20vw;
  height: 60vw;
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;
  p {
    
    user-select: none;
    color: #43383e;
    font-size: 2vw;
    &:first-of-type {
      font-size: 3vw;
    }
  }
  button {
    user-select: none;
    border: none;
    outline: none;
    display: block;
    &:first-of-type {
      background-color: #3b5998;
      margin-bottom: 0.8vw;
    }
    border-radius: 10vw;
    padding: 0.8vw 0;
    font-size: 1.5vw;
    width: 100%;
    background-color: #1da1f2;

    &:last-of-type {
      font-size: 1.8vw;
      background-color: #3d3d3d;
      width: fit-content;
      padding: 1vw 3vw;
    }
  }
  input {
    border: 0;
    outline: 0;
    margin-bottom: 1vw;
    width: 100%;
    border-radius: 10vw;
    padding: 0.8vw 2vw;
    font-size: 1.5vw;
    color: black;
  }
`;
