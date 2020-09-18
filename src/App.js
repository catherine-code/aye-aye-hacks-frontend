import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './pages/register/register.page';
import Landing from './pages/landing/landing.page';
import { Provider } from 'react-redux';
import store from './redux/redux';
import Header from './component/header/header.component'
import Footer from './component/bottom/bottom.component'
import LeftDrawer from './component/leftDrawer/leftDrawer.component'
import RightDrawer from './component/rightDrawer/rightDrawer.component'

function App() {
  return (
    <Provider store={store}>

    <div>
      <Header />
      <LeftDrawer/>

      <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register} />
      
      <RightDrawer/>
      <Footer />
    </div>
    </Provider>

  );
}

export default App;
