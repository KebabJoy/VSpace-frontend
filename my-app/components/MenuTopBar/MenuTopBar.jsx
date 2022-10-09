import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTES } from '../../utils/constants';
import { Container } from './styles';
import moonImg from '../../assets/menuBar/moon.svg';
import profileImg from '../../assets/menuBar/profile.svg';
import walletImg from '../../assets/menuBar/wallet.svg';
import { Icon } from '../common/Icon';

export const MenuTopBar = () => {
  // const router = useRouter();

  return (
    <Container>
      <Icon src={moonImg.src}></Icon>

      <Link href={ROUTES.PROFILE}>
        <Icon src={walletImg.src}></Icon>
      </Link>

      <Link href={ROUTES.PROFILE}>
        <Icon src={profileImg.src}></Icon>
      </Link>
    </Container>
  );
};
