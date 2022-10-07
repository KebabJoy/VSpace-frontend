import homeImg from '../assets/menuBar/home.svg';
import profileImg from '../assets/menuBar/profile.svg';
import workflowImg from '../assets/menuBar/rocket.svg';
import marketImg from '../assets/menuBar/shopping-bag.svg';
import forumImg from '../assets/menuBar/message-square.svg';

export const ROUTES = {
  MAIN: '/',
  WORKFLOW: '/workflow',
  PROFILE: '/profile',
  MARKET: '/market',
  FORUM: '/forum',
  ADMIN: '/admin',
};

export const menuBar = [
  {
    title: 'главная',
    route: ROUTES.MAIN,
    img: homeImg,
  },
  {
    title: 'рабочая среда',
    route: ROUTES.WORKFLOW,
    img: workflowImg,
  },
  {
    title: 'маркет',
    route: ROUTES.MARKET,
    img: marketImg,
  },
  {
    title: 'форум',
    route: ROUTES.FORUM,
    img: forumImg,
  },
  {
    title: 'профиль',
    route: ROUTES.PROFILE,
    img: profileImg,
  },
];
