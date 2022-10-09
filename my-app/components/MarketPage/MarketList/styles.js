import styled from 'styled-components';

export const FiltersContainer = styled.div`
  height: 64px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  color: ${(props) => props.theme.colors.black};
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 18px;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex-grow: 2;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Filter = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const MarketCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 36px;
`;

export const MarketCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 24px 16px;
  width: 248px;
  height: 344px;
  border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  border-radius: ${(props) => props.theme.borderRadius.s};
`;

export const MarketCardImg = styled.img`
  width: 216px;
  height: 193px;
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const MarketCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #5865f2;

  margin-bottom: 12px;
`;
export const MarketCardTitle = styled.div``;
export const MarketCardPrice = styled.div`
  font-weight: 900;
`;
{
  /* <MarketCardImg src={image_url} alt={title}></MarketCardImg>

<MarketCardTitleContainer>
  <MarketCardTitle>{title}</MarketCardTitle>
  <MarketCardPrice>
    {price} {currency}
  </MarketCardPrice>
</MarketCardTitleContainer> */
}
