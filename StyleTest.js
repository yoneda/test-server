import React from "react";
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const GreenTitle = styled(Title)`
  color: forestgreen;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  border: 1px black solid;
  color: ${(props) => (props.primary ? "palevioletred" : "black")};
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  width: 100px;
  height: 100px;
  background: papayawhip;
  animation: ${rotate} 2s linear infinite;
`;

function StyleTest() {
  return (
    <div>
      <Wrapper>
        <Title>hello</Title>
        <GreenTitle>hi, I'm yoneda</GreenTitle>
        <GreenTitle as="p">my hobby is tennis.</GreenTitle>
      </Wrapper>
      <Button primary>button1</Button>
      <Button>button2</Button>
      <Rotate />
    </div>
  );
}

export default StyleTest;
