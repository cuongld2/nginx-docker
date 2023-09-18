import SingleTherapy from '../../../src/components/therapies/single-therapy';

const TherapyPage = ({ data }) => <SingleTherapy data={data} />;

export default TherapyPage;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allTherapies = data.allTherapies;

  const allPaths = allTherapies.map((path) => {
    return {
      params: {
        detail: path.therapyType,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allTherapies } = await import('/data/data.json');
  const therapyData = allTherapies.find((ev) => id === ev.id);

  return {
    props: { data: therapyData },
  };
}
