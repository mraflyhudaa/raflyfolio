import '@/styles/globals.css';
import { Poppins } from '@next/font/google';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Muhammad Rafly Huda | Front-End Web Developer</title>
        <meta
          name='description'
          content='Muhammad Rafly Huda Portfolio Website'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${poppins.variable} font-poppins`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
