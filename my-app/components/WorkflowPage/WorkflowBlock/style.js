import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 48px;
  background-color: ${(props) => (props.background ? props.background : props.theme.colors.white)};
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.secondaryInverse};
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;

  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
`;

export const BioContainer = styled.div`
  padding: 24px 24px 14px;
  max-width: ${(props) => (props.button ? '500px' : null)};
  // max-width: 500px;
  border-radius: 0px 0px 24px 24px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  padding: 24px 0px;
  gap: 12px;
  border-top: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  overflow-x: scroll;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  overflow-x: scroll;
`;

export const Card = styled.div`
  flex: 1 0 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 48px;
  width: 248px;
  height: 344px;
  border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  border-radius: ${(props) => props.theme.borderRadius.s};
`;

export const SliderControlContainer = styled.div`
  position: relative;
  height: 68px;
  padding: 14px 30px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.secondaryInverse};
  }
`;
