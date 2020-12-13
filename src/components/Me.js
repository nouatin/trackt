import React from 'react';
import NotReadyPage from './NotReadyPage';

class Me extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <NotReadyPage />
            </div>
        )
    }    
}

export default Me;