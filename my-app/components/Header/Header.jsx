import styled from 'styled-components';
import logoImg from '../../assets/VSpace.svg';
import logoImgWhite from '../../assets/VSpaceWhite.svg';
import { MenuBar } from '../MenuBar/MenuBar';
import { MenuBarMobile } from '../MenuBarMobile/MenuBarMobile';
import { Logo } from './Logo';

export const Header = () => {
  console.log(logoImg);
  return (
    <Container>
      {/* <StyledImg src={logoImg.src} alt="VSpace"></StyledImg> */}
      {/* <StyledImg src={logoImgWhite.src} alt="VSpace"></StyledImg> */}
      <Logo />
      <MenuBar />
      <StyledEmpty />
      {/* <MenuBarMobile /> */}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 44px;
`;

const StyledEmpty = styled.div`
  flex: 0 1 96px;
`;
