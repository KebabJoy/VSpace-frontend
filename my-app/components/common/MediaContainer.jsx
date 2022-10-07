import styled from 'styled-components';

export const MediaContainer = styled.div`
  background-color: ${({ background, theme }) => background || null};
  width: 320px;
  height: ${({ height }) => height || null};
  margin: 0 auto;

  @media (min-width: 576px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 992px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
