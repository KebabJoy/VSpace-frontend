import styled from 'styled-components';

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: ${({ primary }) =>
    primary
      ? 'invert(13%) sepia(63%) saturate(4366%) hue-rotate(223deg) brightness(86%) contrast(99%)'
      : ''};
  cursor: pointer;
`;
