import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ChatApplication from './components/ChatApplication';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {ProtectedRoute} from "./components/protected.route"



class App extends React.Component{

      render(){
          return(

               <Router>
                   
                   <Switch>
                       <Route exact path="/" component={Login}/>
                       <Route exact path="/register" component={Register}/>
                       <Route exact path="/chatApplication" component={ChatApplication}/>
                   </Switch>

               </Router>
          )
      }
}


export default App;
