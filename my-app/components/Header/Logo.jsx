import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logoImg from '../../assets/VSpace.svg';
import logoImgWhite from '../../assets/VSpaceWhite.svg';

export const Logo = () => {
  return (
    <Link href="/">
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
  flex: 0 1 96px;
  cursor: pointer;
`;
