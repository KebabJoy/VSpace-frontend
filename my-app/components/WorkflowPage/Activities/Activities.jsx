import { MediaContainer } from '../../common/MediaContainer';
import { Card, Container, Title } from './style';

export const Activities = () => {
  return (
    <MediaContainer>
      <Title>
        <span>Виды активностей</span>
      </Title>

      <Container>
        <Card>Курсы</Card>
        <Card>Курсы</Card>
        <Card>Курсы</Card>
        <Card>Курсы</Card>
        <Card>Курсы</Card>
        <Card>Курсы</Card>
      </Container>
    </MediaContainer>
  );
};
