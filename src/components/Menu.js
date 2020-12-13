import React from 'react';
import {FaBars, FaTh} from 'react-icons/fa';

const sidepanel = {
    display: 'none',           
    position: 'fixed',
    zIndex: 1,
    height: '100vh',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(208, 220, 245, 0.5)',
    overflowX: 'hidden'/* ,
    transition: 2 */
}

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {sidepanel};
        this.areaMenu = React.createRef();
    }
    toggleMenu = ()=>{        
        this.setState(state => {
            if(state.sidepanel.display === "block")
                return {sidepanel: {...state.sidepanel, display: 'none', width: '0'}};
            else {
                return {sidepanel: {...state.sidepanel, display: 'block', width: '100vw'}};
            }
        })
        
    }
    openPage = (page)=>{
        this.toggleMenu();
        this.props.page(page);
    }
    componentDidUpdate(){
        if(this.state.sidepanel.display === "block"){
            document.addEventListener('click', this.handleClick);
        }
        else document.removeEventListener('click', this.handleClick);
    }
    handleClick = (e) =>{        
        if(this.areaMenu && !this.areaMenu.current.contains(e.target)) this.toggleMenu();
    }

    render(){
        return (
            <div className="barMenu">
                <div className="barLine">
                    <FaBars onClick={this.toggleMenu} />
                    <span>Scheduling</span>
                    <div><FaTh /> <button>D</button></div>
                </div>
                <div style={this.state.sidepanel}>
                    <div className="menu" ref={this.areaMenu}>
                        <span className="closeMenu" onClick={this.toggleMenu}>&times;</span>
                        <a onClick={()=>this.openPage("sites")}>Sites</a>
                        <a onClick={()=>this.openPage("clients")}>Clients</a>
                        <a onClick={()=>this.openPage("version")}>Version</a>
                        <a onClick={()=>this.openPage("me")}>Me</a>                        
                    </div>                    
                </div>
            </div>
        )
    }    
}

export default Menu;