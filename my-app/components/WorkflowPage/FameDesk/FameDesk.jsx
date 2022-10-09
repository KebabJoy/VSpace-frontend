import { CardContainer, CardTitle, Container, Title } from './style';
import { UserPreview } from '../../UserPreview/UserPreview';
import { MediaContainer } from '../../common/MediaContainer';
import { useEffect, useState } from 'react';
import getLeaderboard from '../../../services/getLeaderboard';

export const FameDesk = () => {
  const [leaders, setLeaders] = useState(null);

  useEffect(() => {
    getLeaderboard().then((result) => {
      if (!result) {
        return;
      }
      setLeaders(result);
    });
  }, []);

  return (
    <MediaContainer style={{ marginBottom: '96px' }}>
      <Title>
        <span>Доска почета</span>
      </Title>

      <Container>
        <CardContainer>
          <CardTitle>Пупсики дня</CardTitle>
          {leaders &&
            leaders.daily.map(({ first_name, last_name, score }, idx) => (
              <UserPreview
                key={idx}
                number={idx + 1}
                username={first_name + ' ' + last_name}
                score={score}
              />
            ))}
        </CardContainer>

        <CardContainer>
          <CardTitle>Лучшие в этом месяце</CardTitle>
          {leaders &&
            leaders.monthly.map(({ first_name, last_name, score }, idx) => (
              <UserPreview
                key={idx}
                number={idx + 1}
                username={first_name + ' ' + last_name}
                score={score}
              />
            ))}
        </CardContainer>

        <CardContainer>
          <CardTitle>Лучшие модераторы</CardTitle>
          {leaders &&
            leaders.overall.map(({ first_name, last_name, score }, idx) => (
              <UserPreview
                key={idx}
                number={idx + 1}
                username={first_name + ' ' + last_name}
                score={score}
              />
            ))}
        </CardContainer>
      </Container>
    </MediaContainer>
  );
};
