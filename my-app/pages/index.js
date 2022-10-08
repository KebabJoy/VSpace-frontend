import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../styles/Main.module.css';
import { MediaContainer } from '../components/common/MediaContainer';
import { MainSection } from '../components/MainPageComponents/MainSection/MainSection';
import { CourseSection } from '../components/MainPageComponents/CourseSection/CourseSection';
import { Button } from '../components/common/Button';
import { UserPreview } from '../components/UserPreview/UserPreview';

const Home = () => {
  return (
    <>
      <Head>
        <title>VSpace - Главная Страница</title>
        <meta name="description" content="Main page VSpace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainSection />
        <Button width={160}>Test</Button>
        <UserPreview number={5} img={''} username={'Timur Salikhov'} />

        <CourseSection />
        {/* <StyledSectionInverse></StyledSectionInverse> */}

        {/* <StyledSection></StyledSection> */}
      </main>

      {/* <footer>
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
      </footer> */}
    </>
  );
};

export default Home;

// const StyledSectionInverse = styled(StyledSection)`
//   background: ${({ theme }) => theme.colors.white};
// `;
