import React from 'react';
import {FaChevronLeft, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import {getAddress, getName} from '../control/fetcher';


class SitesDetails extends React.Component{
    constructor(props){super(props);}
    srcn = ()=>{
        // return {w: window.innerWidth, h: window.innerHeight*0.3};
        return {w: window.screen.width, h: window.screen.height*0.3};
    }
    render(){
        return (
            <div>
                <div className="site details">
                    <FaChevronLeft className="chevonL" onClick={()=>this.props.goBack()} />
                    <div className="imgInfo">
                        <img src={this.props.site.images[0]} alt={this.props.site.title} />
                        <div className="info" >
                            <div>{this.props.site.title}</div>
                            <div className="addr">{getAddress(this.props.site.address)}</div>
                            <div>{getName(this.props.site.contacts.main)}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="bCross">
                    <svg>
                        <line x1="0" y1="0" x2={this.srcn().w} y2={this.srcn().h} style={{stroke:"gray", strokeWidth:"2"}} />
                        <line x1={this.srcn().w} y1="0" x2="0" y2={this.srcn().h} style={{stroke:"gray", strokeWidth:"2"}} />
                    </svg>
                </div>
                <div className="mainContact">
                    <div className="infoLine" ><FaUser className="infoImg" /><div>
                        <div>{getName(this.props.site.contacts.main)}</div>
                        <div className="jobTitle">{this.props.site.contacts.main.jobTitle}</div></div></div>
                    <div className="infoLine" ><FaPhoneAlt className="infoImg" />
                        <div><a href={"tel:"+this.props.site.contacts.main.phoneNumber} >
                            {this.props.site.contacts.main.phoneNumber}</a></div>
                    </div>
                    <div className="infoLine" ><FaEnvelope className="infoImg" /><div><a href={"mailto:" + this.props.site.contacts.main.email }>
                        {this.props.site.contacts.main.email} </a></div>
                    </div>
                    <div className="infoLine" ><FaMapMarkerAlt className="infoImg" /><div>
                        <a href={/* "http://maps.google.com/?q=" */"https://www.google.com/maps/search/?api=1&"+getAddress(this.props.site.contacts.main.address)}>
                            {getAddress(this.props.site.contacts.main.address)}</a>
                        </div></div>
                </div>
            </div>
        )
    }    
}

export default SitesDetails;