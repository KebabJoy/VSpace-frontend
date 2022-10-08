import { CardContainer, CardTitle, Container, Title } from './style';
import { UserPreview } from '../../UserPreview/UserPreview';
import { MediaContainer } from '../../common/MediaContainer';

export const FameDesk = () => {
  return (
    <MediaContainer style={{ marginBottom: '96px' }}>
      <Title>
        <span>Доска почета</span>
      </Title>

      <Container>
        <CardContainer>
          <CardTitle>Title</CardTitle>
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
        </CardContainer>
        <CardContainer>
          <CardTitle>Title</CardTitle>
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
        </CardContainer>
        <CardContainer>
          <CardTitle>Title</CardTitle>
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
          <UserPreview number={1} username={'Timur Salikhov'} />
        </CardContainer>
      </Container>
    </MediaContainer>
  );
};
