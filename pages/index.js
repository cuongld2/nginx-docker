import Head from 'next/head';
import { HomePage } from '../src/components/home/home-page';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>
          Welcome to the mental health therapeotic treatment.< br/>
          We care lot about you.
          </title>
        <meta name="description" content="Created by Donald Le" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { therapies_categories } = await import('/data/data.json');
  return {
    props: {
      data: therapies_categories,
    },
  };
}
