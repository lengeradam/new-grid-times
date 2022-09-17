import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story main-story main-story secondary-stories"
      "advertisement advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories opinion-stories";
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story main-story main-story secondary-stories opinion-stories"
      "main-story main-story main-story advertisement advertisement";
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} {
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

const StoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--color-gray-300);
  gap: 1px;

  &:first-child {
    margin-top: -16px;
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    gap: 32px;
    grid-template-columns: repeat(4, 1fr);
    background-color: revert;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp} {
    padding: 0 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    margin: 0 16px;
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
