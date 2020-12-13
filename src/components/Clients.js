import React from 'react';
import NotReadyPage from './NotReadyPage';

class Clients extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="clients">
                <NotReadyPage />
            </div>
        )
    }    
}

export default Clients;