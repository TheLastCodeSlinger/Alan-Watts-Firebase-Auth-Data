import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { Quotes } from "../components/Quotes";
import Background from "../images/Background/BambooBackgroundjpg.jpg";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { NavigateBefore } from "@material-ui/icons";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
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
  box-shadow: 10px 20px 20px ${(props) => props.theme.colors.main};
  max-width: 750px;
  margin: 10px auto;
`;

const Button = styled.button`
  position: relative;
  padding: 5px;
  font-size: 20px;
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.marked ? "grey" : "transparent")};
  color: ${(props) => (props.marked ? "white" : "black")};
  border: 3px dashed black;

  &:hover
    ${(props) =>
      props.marked
        ? `{
    background-color: transparent;
    color: black;
  }`
        : `{
    background-color: grey;
    color: white;
  }`}
    &:active {
    transform: translate(5px, 20%);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Quote = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  border: 5px ridge lightgrey;
  box-shadow: 0 5px 10px black;
`;

export default function QuoteDisplay({ bookmark, setBookmark }) {
  const [currentQuote, setCurrentQuote] = useState("");
  const [showBookmark, setShowBookmark] = useState(false);

  useEffect(() => {
    setCurrentQuote(Quotes[Math.floor(Math.random() * 100)]);
  }, []);

  //Checks if the Quote is already in bookmark. True/False for Bookmarkbutton-styling
  useEffect(() => {
    const checkForBookmark = () => {
      if (bookmark.filter((id) => id.id === currentQuote.id).length === 1) {
        setShowBookmark(true);
      } else if (
        bookmark.filter((id) => id.id === currentQuote.id).length === 0
      ) {
        setShowBookmark(false);
      }
    };
    checkForBookmark();
  }, [currentQuote]);

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
      //-2, because the currentQuoteId starts at 1 whereas arrays that by 0
      setCurrentQuote(Quotes[currentQuote.id - 2]);
    }
  };

  const setBookmarkHandler = () => {
    if (
      // Checks if the currentQuote is bookmarked. If false, then copy object, add the currentquote and change setShowBookmark to true for visual display.
      bookmark.length === 0 ||
      bookmark.filter((id) => id.id === currentQuote.id).length === 0
    ) {
      setBookmark([...bookmark, currentQuote]);
      setShowBookmark(true);
    } else if (
      bookmark.filter((id) => id.id === currentQuote.id).length === 1
    ) {
      const removeBookmark = bookmark.filter((id) => id.id !== currentQuote.id);
      setBookmark(removeBookmark);
      setShowBookmark(false);
    }
  };

  return (
    <Wrapper>
      <BackgroundImage imgOpacity={"0.5"} />
      <QuoteContainer>
        <ButtonWrapper>
          <Button onClick={() => prevQuoteHandler()}>
            <NavigateBefore />
            {"Prev"}
          </Button>
          <Button marked={showBookmark} onClick={setBookmarkHandler}>
            Bookmark
          </Button>
          <Button onClick={() => nextQuoteHandler()}>
            <NavigateNextIcon />
            {"Next"}
          </Button>
        </ButtonWrapper>
        <Header> Inspirational quotes from Alan Watts</Header>
        {currentQuote && <Quote>"{currentQuote.quote}"</Quote>}
      </QuoteContainer>
    </Wrapper>
  );
}
