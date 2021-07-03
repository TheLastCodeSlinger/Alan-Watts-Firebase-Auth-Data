import React from "react";

import styled from "styled-components";
import AlanWatts from "../images/alanwatts.jpg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const ItemWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 50px auto;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;
const ImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  width: 100%;
  flex: 1 1 40%;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mediaQueries.medium} {
    max-width: 55%;
    flex: 1 1 55%;
  }
`;
const Image = styled.img`
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;
const PersonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  max-width: 60%;
  width: 100%;
  align-items: center;
  background-color: pink;
  line-height: 1.6;
  font-size: 17px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    max-width: 90%;
    flex: 1 1 90%;
  }
`;

const AlansName = styled.h2`
margin-bottom: -5px;
`
const AlansContent = styled.h4`
font-weight: 500;
`

export default function Content() {
  return (
    <Wrapper>
      <ItemWrapper>
        <ImageWrapper>
          <Image src={`${AlanWatts}`} />
          <figcaption>
            Alan Watts, early 1970s (Image courtesy of Everett Collection
          </figcaption>
        </ImageWrapper>
        <PersonInfoWrapper>
          <AlansName>Alan Wilson Watts</AlansName>
          <h3>6 January 1915 – 16 November 1973</h3>
          <AlansContent>{AlansBio}</AlansContent>
          <AlansContent>{AlansBioComment}</AlansContent>
          <div>— LA Times</div>
        </PersonInfoWrapper>
      </ItemWrapper>
    </Wrapper>
  );
}

const AlansBio = `Alan Watts was one of the first to interpret Eastern wisdom for a
Western audience. Born outside London in 1915, he discovered the
nearby Buddhist Lodge at a young age. After moving to the United
States in 1938, Alan became an Episcopal priest for a time, and then
relocated to Millbrook, New York, where he wrote his pivotal book
The Wisdom of Insecurity: A Message for an Age of Anxiety. In 1951
he moved to San Francisco where he began teaching Buddhist studies,
and in 1956 began his popular radio show, “Way Beyond the West.” By
the early sixties, Alan’s radio talks aired nationally and the
counterculture movement adopted him as a spiritual spokesperson. He
wrote and traveled regularly until his passing in 1973.`;

const AlansBioComment = `“Perhaps the foremost interpreter of Eastern disciplines for the
contemporary West, Alan Watts had the rare gift of ‘writing
beautifully the un-writable’. Watts begins with scholarship and
intellect and proceeds with art and eloquence to the frontiers of
the spirit. A fascinating entry into the deepest ways of knowing.”`;
