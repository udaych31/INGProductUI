import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import home from './assets/home.png';
import ing from './assets/ing-logo.jpg';
import './App.css';

class Header extends Component{

send=()=>{
    this.props.history.push('./header');
}

    render(){
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={ing} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">ING Product OverView Screen</h2></li>
                    </ul>
                </div>
            
                <div className="header-right">
                    <Link to='/productGroup'><img src={home} className="logo" height="50px" width="50px"/></Link>
                    <Link to='/graph'><Button><b>Dashboard</b></Button></Link>
                    <Button><b>Newsroom</b></Button>
                    <Button><b>Investors</b></Button>
               </div>
        
                <div id="mySidenav" className="sidenav">
                    <a href="#" id="about">About</a>
                    <a href="#" id="blog">Blog</a>
                    <a href="#" id="projects">Project</a>
                    <a href="#" id="contact">all</a>
                </div>
                <div>
                    <marquee className="slide">ING the SAFER-BANK</marquee>
                </div>
            </div>
        )
    }
}
export default Header;