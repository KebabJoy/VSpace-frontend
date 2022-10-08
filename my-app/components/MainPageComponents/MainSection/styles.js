import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  padding: 0;
  margin: 0;
  margin-bottom: 26px;
  text-transform: uppercase;
`;

export const StyledP = styled.p`
  max-width: 518px;
  margin: 0 auto 210px;
  font-size: 20px;
  line-height: 32px;
`;

export const Container = styled.section`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;

  display: flex;
  flex-direction: column-reverse;
  color: #fff;

  &::before {
    content: '';
    background: linear-gradient(180deg, #5865f2 0%, rgba(88, 101, 242, 0) 100%), #0a2896;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    z-index: -1;
  }
`;
