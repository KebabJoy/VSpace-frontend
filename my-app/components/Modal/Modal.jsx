import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Button } from '../common/Button';

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalBody>{children}</StyledModalBody>

        <Button onClick={handleCloseClick}>Подтвердить</Button>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 48px;
  width: 401px;
  height: 192px;
  background: #ffffff;
  border-radius: 12px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #23272a;
`;

const StyledModalTitle = styled.div``;

export default Modal;
