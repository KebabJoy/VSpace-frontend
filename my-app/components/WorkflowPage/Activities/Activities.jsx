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
        <Card>Марафоны</Card>
        <Card>Игры</Card>
        <Card>Викторины</Card>
        <Card>Лекции</Card>
        <Card>Open Talks</Card>
      </Container>
    </MediaContainer>
  );
};
