import styled from 'styled-components';
import { Filter } from '../../common/Filter';

export const Filters = ({ data, currentFilter, setCurrentFilter }) => {
  const handleClick = (id) => {
    setCurrentFilter(id);
  };

  return (
    <Container>
      {data &&
        data.map((filter, idx) => (
          <StyledFilter
            key={idx}
            active={idx === currentFilter}
            onClick={() => handleClick(filter.id - 1)}
          >
            {filter.name}
          </StyledFilter>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
  gap: 12px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledFilter = styled(Filter)`
  background-color: ${(props) => (props.active ? '#5865F2' : null)};
  color: ${(props) => (props.active ? '#fff' : null)};
`;
