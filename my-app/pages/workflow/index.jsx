import Head from 'next/head';
import Image from 'next/image';
import { Box } from '../../components/common/Box';
import { Text } from '../../components/common/Text';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { News } from '../../components/WorkflowPage/News/News';
import { FameDesk } from '../../components/WorkflowPage/FameDesk/FameDesk';
import { WorkflowBlock } from '../../components/WorkflowPage/WorkflowBlock/WorkflowBlock';
import { Activities } from '../../components/WorkflowPage/Activities/Activities';
import { MediaContainer } from '../../components/common/MediaContainer';
import styled from 'styled-components';

const Workflow = () => {
  return (
    <Container>
      <Head>
        <title>VSpace - Рабочая Среда</title>
        <meta name="description" content="Workflow page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <News />

      <FameDesk />

      <Activities />

      <WorkflowBlock
        title="Курсы"
        bio={
          'Откройте для себя новую область, например информационные технологии или науку о данных. Бесплатные онлайн-курсы от ведущих университетов и компаний мира.'
        }
        button="Больше бесплатных курсов"
        filters={['Работа в программах', 'Upravlenie bozness', 'sCIENCE']}
        data={{}}
      />
      <WorkflowBlock
        title="Марафоны"
        bio={
          'Участвуйте в марафонах, чтобы найти единомышленников и быстро прокачать свои профессиональные навыки'
        }
        filters={['Предстоящие', 'Прошедшие']}
        data={{}}
        background="#f5f3Fa"
      />
      <WorkflowBlock
        title="Игры"
        bio={'Играйте вместе с друзьями. Участвуйте в турнирах и выигрывайте призы'}
        button="Узнать о истории игр"
        filters={['Игры', 'Турниры']}
        data={{}}
      />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 110px;
  background-color ${(props) => props.theme.colors.background};
`;

export default Workflow;
