import Head from 'next/head';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

import UserProvider from '../providers/UserProvider';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>Quizzes.net</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Proza+Libre:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="app">
        <Navbar />
        <div className="component-container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .app {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .component-container {
          flex: 1;
          > * {
            height: 100%;
          }
        }
      `}</style>
      <GlobalStyle />
    </UserProvider>
  );
}

export default MyApp;
