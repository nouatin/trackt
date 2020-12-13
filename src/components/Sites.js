import React from 'react';
import {connect} from 'react-redux';
import {FaSearch, FaChevronRight} from 'react-icons/fa';
import {CgSortAz, CgSortZa} from 'react-icons/cg';
import {RiFilter3Line} from 'react-icons/ri';
import fetcher, {getAddress, getName} from '../control/fetcher';
import SitesDetails from './SitesDetails';
import {setSites} from '../store/actions/sites';

class Sites extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: "loader",
            search: {view: false, text: ""},
            sites: []
        };
        this.myRef = React.createRef();
    }
    componentDidMount(){
        if(this.props.sites.sites.length === 0)
            fetcher('https://tracktik-challenge.staffr.com/sites', 'GET', (sites)=>{
                if(sites !== 'error') {                    
                    this.setState({view: "allSites"});
                    this.props.dispatch(setSites(sites));
                }                  
                else {/**TODO */}
            });
        else this.setState({view: "allSites"});
    }
    componentDidUpdate(){
        if(this.state.search.view && this.myRef && this.myRef.current) this.myRef.current.focus();        
    }
    getAddress = (adr)=> `${adr.street} ${adr.city}, ${adr.country} ${adr.zipCode} ${adr.state}`;
    getName = (main)=> `${main.firstName} ${main.lastName}`;
    updateInput = (e) => {
        let text = e.target.value;
        this.setState(state => ({search: {...state.search, text}}));
    }
    sitesFilter = ()=>{
        if(this.state.search.text !== "")
            return this.props.sites.sites.filter(site => {
                let str = site.title;
                let patt = new RegExp((this.state.search.text.toLowerCase()));
                return patt.test(str.toLowerCase());                
            })
        else return this.props.sites.sites;
    }
    render(){
        return (
            <div className="sites">
                {this.state.view === "loader" ? <div className="loader" ></div> : this.state.view === "allSites" ? 
                <div>
                    <div className="title">Sites</div>
                    <div className="searchLine">
                        {!this.state.search.view ? <div className="allSites"><div>All Sites</div><div>&#9660;</div></div> :
                        <div><input type="text" ref={this.myRef} value={this.state.search.text} 
                            onChange={this.updateInput} /></div>}
                        <div className="sort_search">
                            <div><RiFilter3Line style={{fontSize: "24px"}} />  <FaSearch style={{fontSize: "18px"}} 
                            onClick={()=>this.setState(state => ({search: {...state.search, view: !state.search.view, text: "" }}))} /></div>
                        </div>                        
                    </div>
                    <div >
                        {this.sitesFilter().map((site, index) => {
                            return (<div key={index} className="site" onClick={()=>this.setState({view: site})} >
                                <div className="imgInfo">
                                    <img src={site.images[0]} alt={site.title} />
                                    <div className="info" >
                                        <div>{site.title}</div>
                                        <div className="addr">{getAddress(site.address)}</div>
                                        <div>{getName(site.contacts.main)}</div>
                                    </div>
                                </div>
                                <div><FaChevronRight /></div>
                            </div>)
                        })}
                    </div>                    
                </div>: <div>
                    <SitesDetails site={this.state.view} goBack={()=>this.setState({view: "allSites"})} />                    
                </div>}
            </div>
        )
    }    
}

const mapStateToProps = (state)=> state;

export default connect(mapStateToProps)(Sites);