import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { menuBar } from '../../utils/constants';
import { Container, StyledDiv, TextLink } from './styles';
import { Icon } from '../common/Icon';

export const MenuBarMobile = () => {
  const router = useRouter();
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledDiv onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {menuBar.map(({ title, route, img }, idx) => (
        <Link key={idx} href={route}>
          <Container primary={router.pathname === route} isShown={isShown}>
            <Icon primary={router.pathname === route} src={img.src} alt={title}></Icon>
            {isShown && <TextLink primary={router.pathname === route}>{title}</TextLink>}
            {/* {true && <TextLink primary={router.pathname === route}>{title}</TextLink>} */}
          </Container>
        </Link>
      ))}
    </StyledDiv>
  );
};
