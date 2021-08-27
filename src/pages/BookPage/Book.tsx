import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';
import { BookItem } from '../../types/books';

const placeholder = 'https://via.placeholder.com/300x305';

const useStyles = makeStyles(theme => (
  {
    root: {
      width: '100%',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'center',
      columnGap: 100,
      marginTop: 20,
      padding: "0 20px",
      [theme.breakpoints.down('md')]:{
        columnGap: 30
      },
      [theme.breakpoints.down('sm')]:{
        flexFlow: 'column',
        alignItems: 'center'
      }
    },
    imageContainer: {
      minWidth: 300,
     
      [theme.breakpoints.down('md')]:{
        minWidth: 200
      },
      [theme.breakpoints.down('sm')]:{
        minWidth: 300
      },
      
      '& img': {
        width: "100%"
      }
    },
    description: {
      display: "flex",
      flexFlow: "column",
      marginLeft: 20,
      [theme.breakpoints.down('sm')]:{
        display: "flex",
        flexFlow: "column",
        alignItems: "center"
      },
    },
    subText: {
      fontSize: "2rem"
    },
    descriptionText: {
      fontSize: "1.5rem",
      marginTop: 20
    }
  }
));

type Props = {
  data: BookItem
};

const Book = ({ data: {volumeInfo} }:Props) => {
  const classes = useStyles();
  const description = volumeInfo.description || "No description";
  const categories = volumeInfo.categories || [];
  const authors = volumeInfo.authors || [];
  const categoryString = categories.join(' ');
  const authorsString = authors.join(' ');
  const imageLink = volumeInfo?.imageLinks?.thumbnail || placeholder;

  return (
    <Box component="div" className={classes.root}>
      <Box component="div" className={classes.imageContainer}>
        <img src={imageLink} alt="Book" />
      </Box>
      <Box component="div" className={classes.description}>
        <Typography gutterBottom variant="h1" component="h2">
          Witcher
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.subText}>
          Categories: {categoryString}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.subText}>
          Autors: {authorsString}
        </Typography>
        <Typography variant="body2"  component="p" className={classes.descriptionText}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default Book
