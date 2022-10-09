import * as SliderPrimitive from '@radix-ui/react-slider';
import styled from 'styled-components';
import sliderControlImg from '../../../assets/V.svg';

export const SliderControl = ({ refItem }) => {
  const handleChange = (arrValue) => {
    const value = arrValue[0];
    if (!refItem.current) {
      return;
    }

    const width = refItem.current.getBoundingClientRect().width;
    refItem.current.scrollTo(width * (value / 100), 0);
  };

  return (
    <StyledSlider
      defaultValue={[2]}
      step={1}
      minStepsBetweenThumbs={1}
      aria-label="Scroll"
      onValueChange={handleChange}
    >
      <StyledTrack>
        <SliderPrimitive.Range />
      </StyledTrack>

      <StyledThumb background={sliderControlImg}></StyledThumb>
    </StyledSlider>
  );
};

const StyledSlider = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 1px;
  user-select: none;
  touch-action: none;
`;

const StyledTrack = styled(SliderPrimitive.Track)`
  background-color: ${(props) => props.theme.colors.secondaryInverse};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;

  &[data-orientation='horizontal'] {
    height: 1px;
  }
`;

const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: ${(props) => (props.background.width ? props.background.width + 'px' : '20px')};
  background-image: url(${(props) => props.background.src || null});
  height: ${(props) => (props.background.height ? props.background.height + 'px' : '20px')};

  &:hover {
    cursor: grab;
    // background-color: red;
  }

  &:active {
    cursor: grabbing;
  }

  &:focus {
    // box-shadow: 0 0 0 5px blue;
  }
`;
