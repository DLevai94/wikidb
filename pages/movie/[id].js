export default function Movie() {
  return 'Movie';
}

export async function getStaticProps() {
  // Fetch Movie From WIKI
  const data = await fetcher('title');
  return { props: { data } };
}
