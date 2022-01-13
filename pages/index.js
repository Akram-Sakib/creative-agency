import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Home/Banner';
import Contact from '../components/Home/Contact';
import Portfolios from '../components/Home/Portfolios';
import Services from '../components/Home/Services';
import Sponser from '../components/Home/Sponser';
import Testimonial from '../components/Home/Testimonial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Agency | Home</title>
        <meta name="description" content="An E-Commerce Website " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner/>
        <Sponser/>
        <Services/>
        <Portfolios/>
        <Testimonial/>
        <Contact/>
      </main>
    </>
  );
}
