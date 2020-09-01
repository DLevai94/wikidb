import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { WIKI_API_URL } from '../../utils/config';
import { useRouter } from 'next/router';
import useStyles from '../../hooks/useStyles';

export default function Movie({ movieData, hasError, isLoading = true, imdbId }) {
  const { query } = useRouter();
  const classes = useStyles();
  if (!movieData) return <p>No result</p>;
  if (isLoading) return <CircularProgress />;
  if (hasError) return <p>Error</p>;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        {query.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {movieData.extract}
      </Typography>
      <hr />
      <a target="_blank" rel="noreferrer" href={`https://imdb.com/title/${imdbId}`}>
        <Button variant="contained" color="primary">
          Open IMDB Profile
        </Button>
      </a>
      <a target="_blank" rel="noreferrer" href={`https://en.wikipedia.org/wiki/${movieData.title}`}>
        <Button color="primary">Open Wiki Page</Button>
      </a>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { title } = context?.params;
  const { imdbId } = context?.query;
  try {
    const wikiResponse = await fetch(
      `${WIKI_API_URL}?action=query&prop=extracts&exsentences=10&exlimit=1&titles=${title}&explaintext=1&format=json&formatversion=2&origin=*`
    );
    if (wikiResponse) {
      const movieData = await wikiResponse.json();
      if (!movieData.batchcomplete) {
        throw new Error(`No matching wikipedia post for ${title} .`);
      } else {
        return { props: { movieData: movieData?.query?.pages?.[0], hasError: false, isLoading: false, imdbId } };
      }
    }
  } catch (error) {
    return {
      props: {
        hasError: true,
        error: { ...error },
        isLoading: false,
      },
    };
  }
}
