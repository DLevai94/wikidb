import Cors from 'cors';
import initMiddleware from '../../utils/init-middleware';
import { OMDB_API_URL } from '../../utils/config';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async function handler(req, res) {
  try {
    await cors(req, res);
    const omdbResponse = await fetch(`${OMDB_API_URL}${req.query.title}`);
    if (omdbResponse) {
      const moviesData = await omdbResponse.json();
      console.log(moviesData);
      res.status(200).json(moviesData);
    }
  } catch (error) {
    res.status(500).send('Error while fetching movies');
  }
}
