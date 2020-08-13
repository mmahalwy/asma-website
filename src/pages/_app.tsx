import React, { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';
import { createSEOConfig } from '../utils/seo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps, router }) {
  const logPageView = () => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.route);
    }
  };

  useEffect(() => {
    ReactGA.initialize('UA-168210570-1');
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [router.route]);

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...createSEOConfig({})} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
