// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/choose-user" component={ChooseUser} />
      </Switch>
    </Router>
  );
};

export default App;
