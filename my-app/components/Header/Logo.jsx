import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logoImg from '../../assets/VSpace.svg';
import logoImgWhite from '../../assets/VSpaceWhite.svg';
import { ROUTES } from '../../utils/constants';

export const Logo = () => {
  return (
    <Link href={ROUTES.MAIN}>
      <StyledImage
        src={logoImgWhite.src}
        alt="VSpace"
        width={logoImgWhite.width}
        height={logoImgWhite.height}
      />
    </Link>
  );
};

const StyledImage = styled(Image)`
  flex-grow: 1;
  cursor: pointer;
`;
