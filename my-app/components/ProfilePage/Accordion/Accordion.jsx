import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import chevronImg from '../../../assets/profilePage/chevron-down.svg';
import getUser from '../../../services/getUser';
import getUserHistory from '../../../services/getUserHistory';
import { API_URL } from '../../../utils/constants';
import { MediaContainer } from '../../common/MediaContainer';
import { Counter } from './Counter';
import { Notification } from './Notification';

const TriggerTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const TriggerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const historyPath = API_URL + '/clients/balance_history?auth_token=';

export const AccordionComponent = ({ user }) => {
  const [history, setHistory] = useState(null);
  console.log(history);

  useEffect(() => {
    getUserHistory('', user.auth_token, user.id).then((result) => {
      console.log('history result', result);
      if (!result || !result.success) {
        return;
      }

      setHistory(result.history);
    });
  }, []);

  const handleChange = (value) => {};

  return (
    <MediaContainer>
      <StyledAccordion type="single" defaultValue="item-1" collapsible onValueChange={handleChange}>
        <StyledItem value="item-1">
          <AccordionTrigger>
            <TriggerTitleContainer>
              <Counter count={5} />
              <TriggerTitle>
                <StyledChevron src={chevronImg.src} aria-hidden />
                Коллеги
              </TriggerTitle>
            </TriggerTitleContainer>

            <Notification count={27} />
          </AccordionTrigger>

          <AccordionContent>Коллеги будут здесь</AccordionContent>
        </StyledItem>

        <StyledItem value="item-2">
          <AccordionTrigger>
            <TriggerTitleContainer>
              <Counter count={14} />
              <TriggerTitle>
                <StyledChevron src={chevronImg.src} aria-hidden />
                NFT Коллекция
              </TriggerTitle>
            </TriggerTitleContainer>

            <Notification count={1} />
          </AccordionTrigger>

          <AccordionContent>
            {user.nft_balance.map((item, id) => (
              <div key={id}>{item}</div>
            ))}
          </AccordionContent>
        </StyledItem>

        <StyledItem value="history">
          <AccordionTrigger>
            <TriggerTitleContainer>
              <Counter count={history ? history.length : 0} />
              <TriggerTitle>
                <StyledChevron src={chevronImg.src} aria-hidden />
                История активностей
              </TriggerTitle>
            </TriggerTitleContainer>

            <Notification count={history ? Math.floor(history.length / 2) : null} />
          </AccordionTrigger>

          <AccordionContent>
            {history &&
              history.map(({ id, amount, currency, from_client, to_client }, idx) => {
                return (
                  <div key={id}>
                    {idx + 1}. Сумма {amount} {currency} от {from_client} к {to_client}
                  </div>
                );
              })}
          </AccordionContent>
        </StyledItem>
      </StyledAccordion>
    </MediaContainer>
  );
};

const slideDown = keyframes`
  from {
    height: 0;
  }

  to {
    height: var(--radix-accordion-content-height);
  }
`;

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }

  to {
    height: 0;
  }
`;

const StyledAccordion = styled(AccordionPrimitive.Root)`
  width: 100%;
`;

const StyledItem = styled(AccordionPrimitive.Item)`
  overflow: hidden;
  margin-top: 24px;

  // display: flex;
  // flex-direction: column;
  // align-items: center;
  padding: 0px 24px;
  min-height: 60px;
  background: #ffffff;
  border: 1px solid #fff;
  border-radius: 14px;
  cursor: pointer;

  &:first-child {
    margin-top: 0px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    // box-shadow: 0 0 0 2px #000;
    // background-color: ${({ theme }) => theme.colors.secondaryInverse};
    border-color: ${({ theme }) => theme.colors.secondaryInverse};
  }
`;

const StyledHeader = styled(AccordionPrimitive.Header)`
  all: unset;
  display: flex;
  height: 60px;
`;

const StyledTrigger = styled(AccordionPrimitive.Trigger)`
  all: unset;
  // font-family: inherit;
  // background-color: transparent;
  // padding: 0 20px;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #23272a;

  // font-size: 15px;
  // line-height: 1px;
  // box-shadow: 0 1px 0 #000;
  // '&[data-state="closed"]': { backgroundColor: 'white' },
  // &[data-state="open"] { background-color: red },
  // &:hover {
  //   background-color: red;
  // }
`;
const StyledContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 15px;
  // color: purple;
  // background-color: green;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

const StyledContentText = styled.div`
  padding: 15px 20px;
`;

const StyledChevron = styled.img`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

export const AccordionTrigger = forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      {/* <StyledChevron src={chevronImg.src} aria-hidden /> */}
    </StyledTrigger>
  </StyledHeader>
));
export const AccordionContent = forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {/* <StyledContentText>{children}</StyledContentText> */}
    {children}
  </StyledContent>
));
