import { Container, Image, ImageEmpty, Number, Score, Username } from './styles';
import appleImg from '../../assets/apple.svg';

export const UserPreview = ({ number, img, username, score, callback }) => {
  return (
    <Container>
      {number && <Number>{number}</Number>}

      {img ? <Image src={img} alt={username + 'avatar'} /> : <ImageEmpty />}

      <Username>{username}</Username>

      <Score>{score}</Score>

      {callback && <img src={appleImg.src} onClick={callback} />}
    </Container>
  );
};
