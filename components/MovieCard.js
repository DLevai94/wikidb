import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import useStyles from '../hooks/useStyles';

const MovieCard = ({ title = 'Movie Title', image = 'https://via.placeholder.com/300', year = 'Unknown', id }) => {
  const classes = useStyles();
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Link href="/movie/[id]" as={`/movie/${id}`}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Release: {year}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default MovieCard;
