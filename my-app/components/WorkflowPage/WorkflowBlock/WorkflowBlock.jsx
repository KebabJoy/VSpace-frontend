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

export const WorkflowBlock = ({ title, bio, button, filters, background, data }) => {
  return (
    <Container background={background}>
      <MediaContainer>
        <TitleContainer>
          <Title>{title}</Title>

          <BioContainer button={button}>{bio}</BioContainer>
          {button && <Button>{button}</Button>}
          {/* {button ? (
            <>
              <BioContainer>{bio}</BioContainer>
              <Button>{button}</Button>
            </>
          ) : (
            <BioContainer>{bio}</BioContainer>
          )} */}
        </TitleContainer>

        <FiltersContainer>
          {filters.map((filter, idx) => (
            <Filter key={idx}>{filter}</Filter>
          ))}
        </FiltersContainer>

        <SliderWrapper>
          <SliderContainer>
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

          <SliderControlContainer>
            <img src={sliderControlImg.src}></img>
          </SliderControlContainer>
        </SliderWrapper>
      </MediaContainer>
    </Container>
  );
};
