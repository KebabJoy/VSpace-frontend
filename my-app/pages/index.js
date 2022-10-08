import Head from 'next/head';
import { MainSection } from '../components/MainPageComponents/MainSection/MainSection';
import { CourseSection } from '../components/MainPageComponents/CourseSection/CourseSection';
import { HowItSection } from '../components/MainPageComponents/HowItSection/HowItSection';
import { InfoHowItSection } from '../components/MainPageComponents/InfoHowItSection/InfoHowItSection';
import { ActivitySection } from '../components/MainPageComponents/ActivitySection/ActivitySection';

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

        <CourseSection />

        <HowItSection />

        <InfoHowItSection />

        <ActivitySection />
      </main>
    </>
  );
};

export default Home;
