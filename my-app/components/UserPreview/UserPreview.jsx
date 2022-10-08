import { Container, Image, ImageEmpty, Number, Username } from './styles';
import appleImg from '../../assets/apple.svg';

export const UserPreview = ({ number, img, username, callback }) => {
  return (
    <Container>
      {number && <Number>{number}</Number>}

      {img ? <Image src={img} alt={username + 'avatar'} /> : <ImageEmpty />}

      <Username>{username}</Username>

      {/* {callback && <AppleButton onClick={callback} />} */}
      {callback && <img src={appleImg.src} onClick={callback} />}
    </Container>
  );
};
