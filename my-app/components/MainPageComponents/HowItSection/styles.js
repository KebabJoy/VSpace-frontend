import styled from 'styled-components';
import { Box } from '../../common/Box';

export const Container = styled.div`
  padding: 96px 0;
  display: flex;
  gap: 24px;
  // justify-content: space-between;
`;

export const InfoTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 44px;
  line-height: 53px;
`;

export const StyledBox = styled(Box)`
  flex: 1 0 360px;
`;

export const InfoP = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  padding: 0;
`;

export const InfoBox = styled.div`
  padding: 36px 48px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
`;
