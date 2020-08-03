import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './components/Login/SignIn.component';
import Admin from './components/Admin/admin.component';
import LogOut from './components/Logout/logout.component';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={LogOut} />
        
      </Switch>
    </BrowserRouter>
  );
}


export default App;
