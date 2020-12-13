import React from 'react';
import Menu from './Menu';
import Sites from './Sites';
import Clients from './Clients';
import Me from './Me';
import Version from './Version';

class Challenge extends React.Component{
    constructor(props){
        super(props);
        this.state = {page: "sites"};
    }

    render(){
        return (
            <div>
                <Menu page={(page)=>this.setState({page})}/>
                {this.state.page === "sites" ? <Sites /> :
                this.state.page === "clients" ? <Clients /> :
                this.state.page === "version" ? <Version /> :
                this.state.page === "me" ? <Me /> : null
                }                
            </div>
        )
    }    
}

export default Challenge;