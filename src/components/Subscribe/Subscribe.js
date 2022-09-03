import React from "react";
import styled from "styled-components/macro";
import Button from "../Button";

const Subscribe = (props) => {
  return (
    <Wrapper>
      <Button>Subscribe</Button>
      <Link href="/">Already a subscriber?</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`

const Link = styled.a`
  font-style: italic;
  text-decoration: underline;
`

export default Subscribe;