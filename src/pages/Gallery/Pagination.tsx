import React, { SetStateAction } from 'react';
import BookPagination from '@material-ui/lab/Pagination';
import { Box, makeStyles } from '@material-ui/core';
import { fetchBooks } from '../../store';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  pagination: {
    '& .MuiButtonBase-root':{
      fontSize: '1.5rem'
    }
  }
}));

type Props = {
  count: number;
  searchName: string;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

const Pagination = ({ count, searchName, page, setPage }:Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pages = Math.ceil(count / 16);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    dispatch(fetchBooks({ bookName: searchName, startIndex: newPage*16-16}));
    setPage(newPage);
  }

  return (
    <Box className={classes.root} >
      <BookPagination className={classes.pagination} page={page} onChange={handlePageChange} count={pages} color="primary" size="large"/>
    </Box>
  );
}

export default Pagination;
