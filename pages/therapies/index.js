import AllTherapies from '../../src/components/therapies/therapies-page';

const TherapiesPage = ({ data }) => {
  return <AllTherapies data={data} />;
};

export default TherapiesPage;

export async function getStaticProps() {
  const { therapies_categories } = await import('/data/data.json');
  return {
    props: {
      data: therapies_categories,
    },
  };
}
