import styled from 'styled-components';
import { MenuBar } from '../MenuBar/MenuBar';
import { MenuBarMobile } from '../MenuBarMobile/MenuBarMobile';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <Container>
      <Logo />
      <MenuBar />
      <EmptyDiv />
      {/* <MenuBarMobile /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 48px;
  height: 64px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
// const Container = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 32px 44px;
// `;

const EmptyDiv = styled.div`
  flex: 0 1 96px;
`;
