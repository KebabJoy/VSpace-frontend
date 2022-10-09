import { useState } from 'react';
import buyMarketItem from '../../../services/buyMarketItem';
import { FILTERS } from '../../../utils/constants';
import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import Modal from '../../Modal/Modal';
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
  MarketCardImg,
  MarketCardTitleContainer,
  MarketCardTitle,
  MarketCardPrice,
} from './styles';

// const FILTERS = ['Всё', 'Одежда', 'Канцелярия', 'Другое'];
// const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);
export const MarketList = ({ data, currentFilter, setCurrentFilter }) => {
  const [showModal, setShowModal] = useState('');

  const handleClick = (filter, idx) => {
    setCurrentFilter(filter);
  };

  const handleBuy = (id) => {
    const token = localStorage.getItem('auth_token');
    buyMarketItem('', id, token).then((response) => {
      if (!response) {
        return;
      }

      if (response.success) {
        setShowModal(`Списано ${response.price} ${response.currency} за ${response.title}!`);
      } else {
        setShowModal(`${response.message ? response.message.split('_').join(' ') : 'Ошибка!'}`);
      }
    });
  };

  return (
    <MediaContainer>
      <FiltersContainer>
        <Filters>
          {FILTERS.map((filter, idx) => (
            <Filter key={idx} onClick={() => handleClick(filter, idx)}>
              <span>{filter.title}</span>

              {currentFilter.value === filter.value ? <Underline /> : null}
            </Filter>
          ))}
        </Filters>
      </FiltersContainer>

      {/* FILTER CARD HERE! */}
      <MarketCardsContainer>
        {data.map(({ id, amount, currency, image_url, price, title }) => (
          <MarketCard key={id}>
            <MarketCardImg src={image_url} alt={title}></MarketCardImg>

            <MarketCardTitleContainer>
              <MarketCardTitle>{title}</MarketCardTitle>
              <MarketCardPrice>
                {price} {currency}
              </MarketCardPrice>
            </MarketCardTitleContainer>

            <Button onClick={() => handleBuy(id)}>Купить</Button>
          </MarketCard>
        ))}
      </MarketCardsContainer>

      <Modal show={showModal} onClose={() => setShowModal('')}>
        {showModal}
      </Modal>
    </MediaContainer>
  );
};
