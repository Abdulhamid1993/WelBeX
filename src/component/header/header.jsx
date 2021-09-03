import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="header">
                    <div className="header_left">
                        <a href="#">
                            <img src="https://itv.uz/application/images/itv_logo.png" alt=""/>
                            
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/television.png" alt=""/>
                            <p>IPTV</p>
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/concert.png" alt=""/>
                            <p>Radio FM</p>
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/movie.png" alt=""/>
                            <p>Bo'limlar</p>
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/amediateka.png" alt=""/>
                            <p>Amediateka</p>
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/megogo.png" alt=""/>
                            <p>Megogo</p>
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/video.png" alt=""/>
                            <p>Jonli efir</p>
                        </a>
                        <a href="#">
                            <img className="img_1" src="https://itv.uz/application/images/appmenu/ozbekcha.png" alt=""/>
                            <p>O'zbekcha</p>
                        </a>
                        
                    </div>
                    <div className="header_right">
                        oasfdcnm
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Header;