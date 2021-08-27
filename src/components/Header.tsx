import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, makeStyles, Button } from '@material-ui/core';
import { fetchBooks } from '../store'
import './Header.scss';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "1.5rem",
    flex: 1,
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#b5b5b5',
    },
    '& .MuiInputLabel-root': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& label': {
        color: 'white'
      },
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#b5b5b5',
      },
    },
  },
  button: {
    minWidth: '100px',
    marginRight: theme.spacing(1),
    padding: "15px 10px",
    marginTop: "5px"
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const inputRef = useRef<null|HTMLInputElement>(null);
  const dispatch = useDispatch();

  const requestBooks = (bookName: string) => {
    dispatch(fetchBooks(bookName));
    history.push("/");
  }

  const handleEnterButton = (event:React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter' && target.value.length > 0) {
      requestBooks(target.value);
    }
  }

  const handleButtonClick = () => {
    const { current } = inputRef;
    if (current !== null) {
      if (current.value.length < 0) return;
      requestBooks(current.value);
    }
  };

  return (
    <header className="header">
        <h1 className="header__title">Bookinator</h1>
        <div className="header__search">
          <TextField
            id="outlined-search"
            label="Поиск книг..."
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputRef={inputRef}
            onKeyDown={handleEnterButton}
          />
          <Button variant="contained" color="primary" className={classes.button} onClick={handleButtonClick}>
            Поиск
          </Button>
        </div>
        
    </header>
  );
};

export default Header;
