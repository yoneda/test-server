import React from "react";
import styled from "styled-components";

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
    </div>
  );
}

export default StyleTest;
