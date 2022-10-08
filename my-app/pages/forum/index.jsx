import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css'

const Forum = () => {
  const handleClick = () => {
    fetch('https://enigmatic-everglades-80269.herokuapp.com/clients', { mode: 'no-cors' }).then(
      (res) => console.log(res)
    );
  };

  return (
    <div>
      <Head>
        <title>VSpace - Форум</title>
        <meta name="description" content="Forum page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Forum test</h1>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
};

export default Forum;
