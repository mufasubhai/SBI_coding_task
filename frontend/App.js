import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom';
import Modal from "./components/main_page/modal/modal"
import { HashRouter } from 'react-router-dom';
import MainPageContainer from './components/main_page/main_page_container'


function App() {
  return (
    <div className="App">
              <Modal />

      <HashRouter>
        <Switch>
          <Route exact path='/' component={MainPageContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>

      </HashRouter>
   
    </div>
  );
}

export default App;
