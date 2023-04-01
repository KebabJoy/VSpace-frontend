import { useRouter } from 'next/router';
import Content from '../../components/PostsPage/Content';

const ForumPage = ({ forumId }) => {
  return <Content forumId={forumId}></Content>;
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: {
      forumId: id,
    },
  };
}

export default ForumPage;
