import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from '../components/Header/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html,  
  body {
    padding: 0;
    margin: 0;
    // background: #000;
    // color: #000;

    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const theme = {
  colors: {
    primary: '#0a2896',
    secondary: '#00aaff',
    secondaryInverse: '#b6c1dd',
    background: '#f5f3fa',
    white: '#fff',
    black: '#2f3441',
  },
  borderRadius: {
    xs: '8px',
    s: '14px',
    m: '30px',
    l: '40px',
  },
  font: {
    family: `'Inter', sans-serif`,
    style: 'normal',
    weight: 500,
    lineHeight: 22,
    size: '16px',
  },
};
