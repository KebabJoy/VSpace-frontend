import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { menuBar } from '../../utils/constants';
import { Text } from '../common/Text';

export const MenuBarMobile = () => {
  const router = useRouter();
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledDiv onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {menuBar.map(({ title, route, img }, idx) => (
        <Link key={idx} href={route}>
          <Container primary={router.pathname === route} isShown={isShown}>
            <StyledImg primary={router.pathname === route} src={img.src} alt={title}></StyledImg>
            {isShown && <TextLink primary={router.pathname === route}>{title}</TextLink>}
            {/* {true && <TextLink primary={router.pathname === route}>{title}</TextLink>} */}
          </Container>
        </Link>
      ))}
    </StyledDiv>
  );
};

const TextLink = styled(Text)`
  cursor: pointer;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  background-color: ${({ primary, theme }) => (primary ? theme.colors.background : null)};
  width: ${({ isShown }) => (isShown ? '189px' : null)};
  cursor: pointer;
  transition: all 0.2s;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
  gap: 24px;
  width: min-content;
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  filter: ${({ primary }) =>
    primary
      ? 'invert(13%) sepia(63%) saturate(4366%) hue-rotate(223deg) brightness(86%) contrast(99%)'
      : ''};
`;
