import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import Faq from '../FAQ/FAQContainer';
import List from '../List/ListContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import { AnimatedSwitch } from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/list/:id" component={List} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>


);

export default App;
