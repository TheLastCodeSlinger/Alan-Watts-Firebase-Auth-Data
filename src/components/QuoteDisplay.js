import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { Quotes } from "./Quotes";
import Background from "./BambooBackgroundjpg.jpg";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  opacity: ${(props) => props.imgOpacity};
  position: absolute;
  top: 0;
  left: 0;
`;

const QuoteContainer = styled.div`
  width: 70%;
  height: 100vh;
  margin: 20% auto;
  position: relative;
  line-height: 1.5;
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  width: 100px;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;

`;

export default function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    setCurrentQuote(Quotes[Math.floor(Math.random() * 100)]);
  }, []);

  const nextQuoteHandler = () => {
    if (currentQuote && currentQuote.id === Quotes.length) {
      setCurrentQuote(Quotes[0]);
    } else {
      setCurrentQuote(Quotes[currentQuote.id]);
    }
  };

  const prevQuoteHandler = () => {
    if (currentQuote && currentQuote.id === 1) {
      setCurrentQuote(Quotes[Quotes.length - 1]);
    } else {
      //-2, because the currentQuoteId starts by 1 whereas arrays that by 0
      setCurrentQuote(Quotes[currentQuote.id - 2]);
    }
  };

  return (
    <Wrapper>
      <BackgroundImage imgOpacity={"0.5"} />
      <QuoteContainer>
        <Header> Inspirational quotes from Alan Watts</Header>
        {currentQuote && `"${currentQuote.quote}"`}
        <ButtonWrapper>
          <Button onClick={() => nextQuoteHandler()}>CLICK</Button>
          <Button onClick={() => prevQuoteHandler()}>BACK</Button>
        </ButtonWrapper>
      </QuoteContainer>
    </Wrapper>
  );
}
