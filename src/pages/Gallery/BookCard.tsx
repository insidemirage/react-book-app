import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Card, CardActionArea, Box, CardContent, Typography } from '@material-ui/core';
import { ImageLinks } from '../../types/books';

const placeholder = 'https://via.placeholder.com/128x205';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  
  category: {
    fontSize: "1.5rem"
  },
  autors: {
    fontSize: "1.5rem"
  },
  media: {
    width: "100%",
    '& img':{
      width: "100%"
    }
  }
});


type Props = {
  image?: ImageLinks;
  title: string;
  authors?: string[];
  categories?: string[];
  id: string;
};

const BookCard = ({ id, image, title, authors = [], categories = [] }:Props) => {
  const classes = useStyles();
  const categoryString = categories[0] || "Unknown category";
  const authorsString = authors.join(' ');
  const imageLink = image ? image.thumbnail : placeholder;
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/book/${id}`}>
              <Box component="div" className={classes.media}>
                <img src={imageLink} alt="Book"/>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.category}>
                  { categoryString }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.autors}>
                  Autors: { authorsString }
                </Typography>
              </CardContent>
            </CardActionArea>
    </Card>
  );
};

export default BookCard;
