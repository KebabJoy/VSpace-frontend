import { Button } from '../../common/Button';
import { Filter } from '../../common/Filter';
import {
  BioContainer,
  Card,
  Container,
  FiltersContainer,
  SliderContainer,
  SliderControlContainer,
  SliderWrapper,
  Title,
  TitleContainer,
} from './style';
import sliderControlImg from '../../../assets/V.svg';
import { MediaContainer } from '../../common/MediaContainer';
import { SliderControl } from './SliderControl';
import { useCallback, useRef } from 'react';

export const WorkflowBlock = ({ title, bio, button, filters, background, data, paddingTop }) => {
  const ref = useRef(null);

  return (
    <Container background={background} paddingTop={paddingTop}>
      <MediaContainer>
        <TitleContainer>
          <Title>{title}</Title>

          <BioContainer button={button}>{bio}</BioContainer>
          {button && <Button>{button}</Button>}
        </TitleContainer>

        <FiltersContainer>
          {filters.map((filter, idx) => (
            <Filter key={idx}>{filter}</Filter>
          ))}
        </FiltersContainer>

        <SliderWrapper>
          <SliderContainer ref={ref}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </SliderContainer>

          <SliderControl refItem={ref} />
        </SliderWrapper>
      </MediaContainer>
    </Container>
  );
};
