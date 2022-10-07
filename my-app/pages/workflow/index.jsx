import Head from 'next/head';
import Image from 'next/image';
import { Box } from '../../components/common/Box';
import { Text } from '../../components/common/Text';
import { MenuBar } from '../../components/MenuBar/MenuBar';

const Workflow = () => {
  return (
    <div>
      <Head>
        <title>Workflow page</title>
        <meta name="description" content="Workflow page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Workflow test</h1>
      <Text>123 SDASSSD ФЫВВЫФВЫВЫВЫ тест тест ТЕСТ ыовофывдфывфд</Text>
      <Text primary>123 SDASSSD ФЫВВЫФВЫВЫВЫ тест тест ТЕСТ ыовофывдфывфд</Text>
      <Text primary size={30}>
        123 SDASSSD ФЫВВЫФВЫВЫВЫ тест тест ТЕСТ ыовофывдфывфд
      </Text>
      <Box>
        <MenuBar />
        <Text weight={900}>123 SDASSSD ФЫВВЫФВЫВЫВЫ тест тест ТЕСТ ыовофывдфывфд</Text>
      </Box>
    </div>
  );
};

export default Workflow;
