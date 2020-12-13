import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Challenge from './components/Challenge';

class Root extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Challenge} exact={true} />                    
                </Switch>
            </BrowserRouter>
        )
    }    
}

export default Root;