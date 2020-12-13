import React from 'react';
import NotReadyPage from './NotReadyPage';

class Version extends React.Component{
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

export default Version;