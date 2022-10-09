import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuBar } from '../../utils/constants';
import { Container, LinkItem, StyledA, Underline } from './styles';

export const MenuBar = () => {
  const router = useRouter();

  return (
    <Container>
      {menuBar.map(({ title, route }, idx) => (
        <Link key={idx} href={route}>
          <LinkItem>
            <StyledA primary={router.pathname === route}>{title}</StyledA>

            {router.pathname === route ? <Underline /> : null}
          </LinkItem>
        </Link>
      ))}
    </Container>
  );
};
