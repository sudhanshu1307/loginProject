import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from  'react-redux';
import store from './redux/store';

import SignIn from './components/Login/SignIn.component';
// import Admin from './components/Admin/admin.component';
import LogOut from './components/Logout/logout.component';
import User from './components/Admin/userContainer';




function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Provider store={store}>
            {/* <Route path="/admin" component={Admin} /> */}
            <Route path="/user" component={User} />
          </Provider>
          <Route path="/logout" component={LogOut} />
        </Switch>
      </BrowserRouter>
  );
}


export default App;
