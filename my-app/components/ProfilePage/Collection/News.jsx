import { MediaContainer } from '../../common/MediaContainer';
import { Container } from './style';

export const News = ({ title }) => {
  return (
    <MediaContainer>
      <Container>{title}</Container>
    </MediaContainer>
  );
};
