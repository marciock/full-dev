import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import DashPage from 'components/Pages/Dash/DashPage';
import LoginPage from 'components/Pages/Login/LoginPage';


const Root=()=>{
    return(
    <div>
       
        <Router>
            
            <Switch>
                <Route exact path="/dash" component={DashPage}></Route>
               
                
            
            </Switch>
            <Switch>
                <Route exact path="/" component={LoginPage}></Route>
            </Switch>
            
        </Router>

    </div>
    )
}

export default Root;