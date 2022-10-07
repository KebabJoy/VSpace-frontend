import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header/Header';
// import backgroundImg from '../assets/mainPage/background.png';
import backgroundImg from '../assets/mainPage/background3.svg';
import styled from 'styled-components';
import styles from '../styles/Main.module.css';
import { MediaContainer } from '../components/common/MediaContainer';

const Home = () => {
  return (
    <div style={{ color: 'white' }}>
      <Head>
        <title>VSpace - Главная Страница</title>
        <meta name="description" content="Main page VSpace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainSection background={backgroundImg.src}>
          <MediaContainer>
            <StyledTitle>Представьте себе...</StyledTitle>
            <StyledP>
              …место, где будет комфортно себя чувствовать любая компания: бухгалтеров, банкиров,
              программистов, дизайнеров, менеджеров. Место, где можно замутить приколдес.
            </StyledP>
          </MediaContainer>
        </MainSection>

        <StyledSection>
          <MediaContainer></MediaContainer>
        </StyledSection>

        <StyledSectionInverse></StyledSectionInverse>

        <StyledSection></StyledSection>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

const StyledTitle = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  padding: 0;
  margin: 0;
  margin-bottom: 26px;
`;

const StyledP = styled.p`
  max-width: 518px;
  margin: 0 auto 210px;
  font-size: 20px;
  line-height: 32px;
`;

const StyledSection = styled.section`
  height: 685px;
  background: ${({ theme }) => theme.colors.background};
`;

const StyledSectionInverse = styled(StyledSection)`
  background: ${({ theme }) => theme.colors.white};
`;

const MainSection = styled.section`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;

  display: flex;
  flex-direction: column-reverse;

  &::before {
    content: '';
    background: linear-gradient(180deg, #5865f2 0%, rgba(88, 101, 242, 0) 100%), #0a2896;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    z-index: -1;
  }
`;
