import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(props) => props.padding || '12px 16px'};
  width: ${(props) => (props.width ? props.width + 'px' : null)};
  height: ${(props) => (props.height ? props.height + 'px' : null)};
  color: ${(props) => props.color || props.theme.colors.primary};
  background-color: ${(props) => props.background || 'transparent'};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  font-size: ${(props) => props.fontSize || '14px'};
  line-height: ${(props) => props.lineHeight || '17px'};
  font-weight: ${(props) => props.fontWeight || 500};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
