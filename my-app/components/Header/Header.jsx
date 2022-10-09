import styled from 'styled-components';
import { MenuBar } from '../MenuBar/MenuBar';
import { MenuBarMobile } from '../MenuBarMobile/MenuBarMobile';
import { MenuTopBar } from '../MenuTopBar/MenuTopBar';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <Container>
      <Logo />

      <MenuBar />

      <MenuTopBar />
      {/* <MenuBarMobile /> */}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 48px;
  height: 64px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;
