import React from 'react'

import styled from 'styled-components'

import Background from '../images/Background/BambooBackgroundjpg.jpg'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
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

const Header = styled.h2`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  max-width: 750px;
  margin: 50px auto;
  position: relative;
  text-decoration: underline;
`;

const QuoteContainer = styled.div`
  width: 70%;
  margin: 10% auto;
  position: relative;
  line-height: 1.5;
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

const Quote = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  border: 5px ridge lightgrey;
  box-shadow: 0 5px 10px black;
`;



export default function Bookmarks({bookmark, setBookmark}) {
    
    const mapBookmarks = () => (
        bookmark.map(item => {
            return <QuoteContainer key={item.id}><Quote>{item.quote}</Quote></QuoteContainer>
        })
    )
    console.log(bookmark, "BOOKMARKS");
    return (
        <Wrapper>
            <BackgroundImage imgOpacity={"0.5"} />
            <Header>Favorite Quotes</Header>
            {mapBookmarks()}
        </Wrapper>
        )
}
