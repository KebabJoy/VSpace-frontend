import styled from 'styled-components';
import searchImg from '../../../assets/adminPage/search.svg';

export const Search = ({ users, setCurrentUsers }) => {
  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();

    const newUsers = users.filter(({ first_name, last_name }) => {
      if (!first_name || !last_name) {
        return;
      }

      return (
        first_name.toLowerCase().indexOf(val) !== -1 || last_name.toLowerCase().indexOf(val) !== -1
      );
    });
    // const newUsers = users.filter(({ first_name, last_name }) => {
    // return (
    //   first_name.toLowerCase().indexOf(val) !== -1 || last_name.toLowerCase().indexOf(val) !== -1
    // );
    // });

    setCurrentUsers(newUsers);
  };

  return (
    <Container>
      <SearchContainer>
        <img src={searchImg.src} alt="search"></img>
        <StyledInput onChange={handleChange} placeholder="Найти сотрудника"></StyledInput>
      </SearchContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-bottom: 1px solid #b6c1dd;
  margin-bottom: 58px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
`;

const StyledInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
