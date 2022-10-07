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
          <TextLink primary={router.pathname === route}>{title}</TextLink>
        </Link>
      ))}
    </StyledDiv>
  );
};

const TextLink = styled(Text)`
  cursor: pointer;
`;

const StyledDiv = styled.div`
  width: 510px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 24px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
`;
