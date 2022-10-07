import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { menuBar } from '../../utils/constants';
import { Text } from '../common/Text';

export const MenuBar = () => {
  const router = useRouter();

  return (
    <StyledDiv>
      {menuBar.map(({ title, route }, idx) => (
        <Link key={idx} href={route}>
          <StyledA primary={router.pathname === route}>
            {title}
            {/* <TextLink primary={router.pathname === route}>{title}</TextLink> */}
          </StyledA>
        </Link>
      ))}
    </StyledDiv>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: ${({ primary, theme }) => (primary ? theme.colors.white : theme.colors.secondaryInverse)};
  text-decoration-line: ${({ primary }) => (primary ? 'underline' : null)};
  font-size: 18px;
  text-underline-offset: 2px;
  cursor: pointer;
`;

const TextLink = styled(Text)`
  cursor: pointer;
`;

const StyledDiv = styled.div`
  width: 543px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 24px;
  // background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;

  background: rgba(10, 40, 150, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
`;
