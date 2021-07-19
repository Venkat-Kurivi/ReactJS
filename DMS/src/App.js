import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  LoginComponent from './Components/login';
import LoginLayoutRoute from './Layouts/loginLayout';
import { BrowserRouter as Router, Route, Redirect, Switch  } from 'react-router-dom';  
import MainLayoutRoute from './Layouts/mainLayout';
import DashboardComponent from './Components/dashboard';
import ClaimDetailsComponent from './Components/claimDetails';

//Redex related
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import myReducer from './RedEx/reducer'

 

function App() {

  const store=createStore(myReducer);

  return (
    <div className="App">
      <Provider store={store}>
      <Router>  
        <Switch>  
          <Route exact path="/" >  
            <Redirect to="/Login" />  
          </Route>   
              <LoginLayoutRoute path="/Login" component={LoginComponent} />    
              <MainLayoutRoute path="/dashboard" component={DashboardComponent} />    
              <MainLayoutRoute path="/claimDetails/:id"  component={ClaimDetailsComponent} />    
          </Switch>   
          </Router> 
          </Provider>
    </div>
  );
}

export default App;
