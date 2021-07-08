import React from "react";

import styled from "styled-components";

import AlanWatts from "../images/Alan/alanwatts.jpg";
import AlanEarly from "../images/Alan/AlanAge21.jpg";
import AlanMiddle from "../images/Alan/AlanAge36.jpg";
import AlanLate from "../images/Alan/AlanLate.jpg";

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
    flex-direction: ${(props) =>
      props.position === "left" ? "column" : "column-reverse"};
  }
`;
const ImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  width: 100%;
  flex: 1 1 50%;
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
  line-height: 1.6;
  font-size: 17px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    max-width: 90%;
    flex: 1 1 90%;
  }
`;

const AlansName = styled.h2`
  margin-bottom: -5px;
`;
const AlansContent = styled.h4`
  font-weight: 500;
`;

export default function Content() {
  return (
    <Wrapper>
      <ItemWrapper position="left">
        <ImageWrapper>
          <Image src={`${AlanWatts}`} alt="Alan Watts, early 1970s" />
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

      <ItemWrapper position="right">
        <PersonInfoWrapper>
          <AlansName>Early Years</AlansName>
          <AlansContent>{AlansEarlyYears}</AlansContent>
        </PersonInfoWrapper>
        <ImageWrapper>
          <Image src={`${AlanEarly}`} />
        </ImageWrapper>
      </ItemWrapper>

      <ItemWrapper position="left">
        <ImageWrapper>
          <Image src={`${AlanMiddle}`} />
        </ImageWrapper>
        <PersonInfoWrapper>
          <AlansName>Middle Years</AlansName>
          <AlansContent>{AlansMiddleYears}</AlansContent>
        </PersonInfoWrapper>
      </ItemWrapper>

      <ItemWrapper position="right">
        <PersonInfoWrapper>
          <AlansName>Late Years</AlansName>
          <AlansContent>{AlansLateYears}</AlansContent>
        </PersonInfoWrapper>
        <ImageWrapper>
          <Image src={`${AlanLate}`} />
        </ImageWrapper>
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

const AlansEarlyYears = `
Watts was born to middle-class parents in the village of 
Chislehurst, Kent (now south-east London), on 6 January 1915, living at Rowan Tree Cottage, 3 (now 5) Holbrook Lane. 
Watts' father, Laurence Wilson Watts, was a representative for the London office of the Michelin tyre company. 
His mother, Emily Mary Watts (née Buchan), was a housewife whose father had been a missionary. 
With modest financial means, they chose to live in pastoral surroundings and Watts, an only child, 
grew up playing at Brookside, learning the names of wildflowers and butterflies. 
Probably because of the influence of his mother's religious family the Buchans, an interest 
in "ultimate things" seeped in. It mixed with Watts's own interests in storybook fables and 
romantic tales of the mysterious Far East. Watts also later wrote of a mystical dream he 
experienced while ill with a fever as a child. During this time he was influenced 
by Far Eastern landscape paintings and embroideries that had been given to his mother 
by missionaries returning from China. The few Chinese paintings Watts was able to see in England 
riveted him, and he wrote "I was aesthetically fascinated with a certain clarity, transparency, and 
spaciousness in Chinese and Japanese art. It seemed to float..." These works of art emphasised 
the participatory relationship of people in nature, a theme that stood fast throughout his life and one that he often wrote about.`;

const AlansMiddleYears = `
Watts left the faculty in the mid-1950s. In 1953, he began what became a long-running weekly radio program 
at Pacifica Radio station KPFA in Berkeley. Like other volunteer programmers at the listener-sponsored 
station, Watts was not paid for his broadcasts. These weekly broadcasts continued until 1962, by 
which time he had attracted a "legion of regular listeners". 
Watts continued to give numerous talks and seminars, recordings of which were broadcast on KPFA 
and other radio stations during his life. These recordings are broadcast to this day. For example, in 
1970 Watts lectures were broadcast on Sunday mornings on San Francisco radio station KSAN and even today 
a number of radio stations continue to have an Alan Watts program in their weekly program schedules. 
Original tapes of his broadcasts and talks are currently held by the Pacifica Radio Archives, based 
at KPFK in Los Angeles, and at the Electronic University archive founded by his son, Mark Watts. 
In 1957 Watts, then 42, published one of his best known books, The Way of Zen, which 
focused on philosophical explication and history. Besides drawing on the lifestyle and philosophical 
background of Zen in India and China, Watts introduced ideas drawn from general semantics 
(directly from the writings of Alfred Korzybski) and also from Norbert Wiener's early work on cybernetics, 
which had recently been published. Watts offered analogies from cybernetic principles possibly applicable to the Zen 
life. The book sold well, eventually becoming a modern classic, and helped widen his lecture circuit. 
In 1958, Watts toured parts of Europe with his father, meeting the Swiss psychiatrist Carl Jung and the German 
psychotherapist Karlfried Graf Dürckheim. 
Upon returning to the United States, Watts recorded two seasons of a television series (1959–1960) for KQED public 
television in San Francisco, "Eastern Wisdom and Modern Life". 
In the 1960s, Watts became interested in how identifiable patterns in nature tend to repeat themselves from the 
smallest of scales to the most immense. This became one of his passions in his research and thought. 
Though never affiliated for long with any one academic institution, he was Professor of Comparative Philosophy at 
the California Institute of Integral Studies, had a fellowship at Harvard University (1962–1964), and was a Scholar 
at San Jose State University (1968). He also lectured college and university students as well as the general 
public. His lectures and books gave him influence on the American intelligentsia of the 1950s–1970s, but 
he was often seen as an outsider in academia. When questioned sharply by students during his talk at University of 
California, Santa Cruz, in 1970, Watts responded, as he had from the early sixties, that he was not an academic philosopher 
but rather "a philosophical entertainer".`;

const AlansLateYears = `In his writings of the 1950s, he conveyed his admiration for the practicality in the historical 
achievements of Chán (Zen) in the Far East, for it had fostered farmers, architects, builders, folk physicians, artists, 
and administrators among the monks who had lived in the monasteries of its lineages. In his mature work, he presents 
himself as "Zennist" in spirit as he wrote in 
his last book, Tao: The Watercourse Way. Child rearing, 
the arts, cuisine, education, law and freedom, architecture, sexuality, and the uses and abuses of technology were 
all of great interest to him. Though known for his discourses on Zen, he was also influenced by ancient Hindu scriptures, 
especially Vedanta and Yoga. 
He spoke extensively about the nature of the divine reality which Man 
misses: how the contradiction of opposites is the method of life and the 
means of cosmic and human evolution, how our fundamental Ignorance is rooted 
in the exclusive nature of mind and ego, how to come in touch with the Field 
of Consciousness and Light, and other cosmic principles. 
Watts sought to resolve his feelings of alienation from the institutions of 
marriage and the values of American society, as revealed in his comments on love relationships in "Divine Madness" 
and on perception of the organism-environment in "The Philosophy of Nature". In looking at social issues he was 
concerned with the necessity for international peace, for tolerance and understanding among disparate cultures. 
Watts also came to feel acutely conscious of a growing ecological predicament. Writing, for 
example, in the early 1960s: "Can any melting or burning imaginable get rid of these ever-rising mountains of ruin—especially 
when the things we make and build are beginning to look more and more like rubbish even before they are thrown away?" 
These concerns were later expressed in a television pilot made for NET (National Educational Television) filmed at his 
mountain retreat in 1971 in which he noted that the single track of conscious attention was wholly inadequate for 
interactions with a multi-tracked world.`;
