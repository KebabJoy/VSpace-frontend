import styled from 'styled-components';
import exchangeUser from '../../../services/exchangeUser';
import { UserPreview } from '../../UserPreview/UserPreview';

export const Users = ({ data }) => {
  const handleExchange = (id, amount) => {
    const token = localStorage.getItem('auth_token');
    exchangeUser(token, id, amount).then((result) => {
      console.log('EXCHANGE', result);
    });
  };

  return (
    <Container>
      <Grid>
        {data &&
          data.map(({ first_name, last_name, avatar_url, id }) => (
            <UserPreview
              key={id}
              img={avatar_url}
              username={first_name + ' ' + last_name}
              callback={(amount) => handleExchange(id, amount)}
            />
          ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 36px 12px;
  background: #ffffff;
  border-radius: 14px;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px 24px;
`;
