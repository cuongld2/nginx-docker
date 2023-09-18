import DetailTherapy from '../../../src/components/therapies/detailTherapy';

const TherapiesDetailPage = ({ data, pageName }) => <DetailTherapy data={data} pageName={pageName} />;

export default TherapiesDetailPage;

export async function getStaticPaths() {
  const { therapies_categories } = await import('/data/data.json');
  const allPaths = therapies_categories.map((ev) => {
    return {
      params: {
        detail: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.detail;
  const { allTherapies } = await import('/data/data.json');

  const data = allTherapies.filter((ev) => ev.therapyType === id);

  return { props: { data, pageName: id } };
}
