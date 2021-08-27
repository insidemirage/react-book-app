import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import BookPage from './pages/BookPage';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <>
      <Header /> 
      <Switch>
        <Route path="/book/:id" component={BookPage} />
        <Route path="/" component={Gallery}/>
      </Switch>
    </>
  );
};

export default App;
