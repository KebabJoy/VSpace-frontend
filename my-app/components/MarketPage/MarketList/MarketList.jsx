import { useState } from 'react';
import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import {
  EmptyImage,
  Image,
  ImageContainer,
  Info,
  StyledP,
  Title,
  Container,
  Filters,
  Filter,
  MarketCardsContainer,
  MarketCard,
  Underline,
  FiltersContainer,
} from './styles';

const FILTERS = ['Всё', 'Одежда', 'Канцелярия', 'Другое'];

export const MarketList = ({ data }) => {
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);

  const handleClick = (filter, idx) => {
    setCurrentFilter(filter);
  };

  return (
    <MediaContainer>
      <FiltersContainer>
        <Filters>
          {FILTERS.map((filter, idx) => (
            <Filter key={idx} onClick={() => handleClick(filter, idx)}>
              <span>{filter}</span>

              {currentFilter === filter ? <Underline /> : null}
            </Filter>
          ))}
        </Filters>
      </FiltersContainer>

      {/* FILTER CARD HERE! */}
      <MarketCardsContainer>
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </MarketCardsContainer>
    </MediaContainer>
  );
};
