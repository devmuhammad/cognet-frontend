import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SideBar extends Component {


    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }
    handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }
    handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
                <nav>
                    <a onClick={this.closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Outdoors & Garden
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>garden</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">paving & walling</Link>
                                                    </li>
                                                    <li>
                                                    <Link to="#">Decking</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">Stone, gravel & chippings</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">watering, hoses & ponds</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">Outdoor lights</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">turf & artificial grass</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">hand tools & equipment</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">lawn & plant care</Link>
                                                    </li>
                                                </ul>
                                                {/* <h5>men's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">sports wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">western wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ethic wear</Link>
                                                    </li>
                                                </ul> */}
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>fencing</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">fencing panels</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">fence paint</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">fence posts</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">trellis & screening</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">garden gates</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">gate furniture</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">gravel boards</Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link to="#"></Link>
                                                    </li> */}
                                                    <li>
                                                        <Link to="#">garden mesh & netting</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-4">
                                            <a href="#" className="mega-menu-banner">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/fashion.jpg`} alt="" className="img-fluid"/>
                                            </a>
                                        </div> */}
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                Kitchen & Bathroom
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                
                                <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        kitchen
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">fitted kitchens</Link>
                                        </li>
                                        <li>
                                            <Link to="#">cabinets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sinks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">taps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">appliances</Link>
                                        </li>
                                        <li>
                                            <Link to="#">storage & accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="#">kitchen bins</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        Bathrooms
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">bathroom suites</Link>
                                        </li>
                                        <li>
                                            <Link to="#">baths</Link>
                                        </li>
                                        <li>
                                            <Link to="#">bath panels</Link>
                                        </li>
                                        <li>
                                            <Link to="#">toilets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">basins</Link>
                                        </li>
                                        <li>
                                            <Link to="#">taps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">accessories</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        Showering
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">showers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">enclosures & doors</Link>
                                        </li>
                                        <li>
                                            <Link to="#">trays</Link>
                                        </li>
                                        <li>
                                            <Link to="#">screens</Link>
                                        </li>
                                        <li>
                                            <Link to="#">shower kits</Link>
                                        </li>
                                        <li>
                                            <Link to="#">shower curtains</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wet rooms</Link>
                                        </li>
                                    </ul>
                                </li>
                                
                               
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                building & interior
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        building supplies
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">aggregates & sands</Link>
                                        </li>
                                        <li>
                                            <Link to="#">bricks & blocks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">concrete & cement</Link>
                                        </li>
                                        <li>
                                            <Link to="#">additives & chemicals</Link>
                                        </li>
                                        <li>
                                            <Link to="#">insultation & damp</Link>
                                        </li>
                                        <li>
                                            <Link to="#">plasterboard</Link>
                                        </li>
                                        <li>
                                            <Link to="#">coving</Link>
                                        </li>
                                        <li>
                                            <Link to="#">roofing supplies</Link>
                                        </li>
                                        <li>
                                            <Link to="#">guttering & drainage</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sealants</Link>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        timber & sheet materials
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">constructional timber</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sheet materials</Link>
                                        </li>
                                        <li>
                                            <Link to="#">finishing timber</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Architrave</Link>
                                        </li>
                                        <li>
                                            <Link to="#">decorative mouldings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">timber cladding</Link>
                                        </li>
                                        <li>
                                            <Link to="#">boards</Link>
                                        </li>
                                        <li>
                                            <Link to="#">stairs & stair parts</Link>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        Hardware
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">screws</Link>
                                        </li>
                                        <li>
                                            <Link to="#">handles & knobs</Link>
                                        </li>
                                        <li>
                                            <Link to="#">hinges</Link>
                                        </li>
                                        <li>
                                            <Link to="#">hooks & hangers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">bolts, nuts & washers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">brackets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">locks & padlocks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">furniture hardware</Link>
                                        </li>
                                        <li>
                                            <Link to="#">fixings & plugs</Link>
                                        </li>
                                        <li>
                                            <Link to="#">nails</Link>
                                        </li>
                                        <li>
                                            <Link to="#">ropes, bungees & chains</Link>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        doors & windows
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">internal doors</Link>
                                        </li>
                                        <li>
                                            <Link to="#">external doors</Link>
                                        </li>
                                        <li>
                                            <Link to="#">garage doors</Link>
                                        </li>
                                        <li>
                                            <Link to="#">windows</Link>
                                        </li>
                                        <li>
                                            <Link to="#">door locks & latches</Link>
                                        </li>
                                        <li>
                                            <Link to="#">door frames & fixtures</Link>
                                        </li>
                                        <li>
                                            <Link to="#">porches</Link>
                                        </li>
                                        <li>
                                            <Link to="#">left door & hatches</Link>
                                        </li>
                                        <li>
                                            <Link to="#">door clearance</Link>
                                        </li>
                                    </ul>
                            </li>
                                
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                tiling & flooring
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        flooring
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">laminate</Link>
                                        </li>
                                        <li>
                                            <Link to="#">luxury vinyl click</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sheet vinyl</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="#">vinyl tiles</Link>
                                        </li> */}
                                        <li>
                                            <Link to="#">woods</Link>
                                        </li>
                                        <li>
                                            <Link to="#">vinyl planks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">carpet tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">flooring samples</Link>
                                        </li>
                                        
                                    </ul>
                            </li>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        tiles
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">floor tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wall tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">mosaic & border tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wall & floor tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">bathroom tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">kitchen tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">outdoor tiles</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tile ranges</Link>
                                        </li>
                                        
                                    </ul>
                            </li>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        accessories
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">underlay</Link>
                                        </li>
                                        <li>
                                            <Link to="#">scotias & floor trims</Link>
                                        </li>
                                        <li>
                                            <Link to="#">thresholds & reducers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">skirting & architrave</Link>
                                        </li>
                                        <li>
                                            <Link to="#">underfloor heating</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tiling trims</Link>
                                        </li>
                                        <li>
                                            <Link to="#">grout</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tiling adhesive</Link>
                                        </li>
                                        
                                    </ul>
                            </li>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        tools
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">tile cutters</Link>
                                        </li>
                                        <li>
                                            <Link to="#">power saws</Link>
                                        </li>
                                        <li>
                                            <Link to="#">drills</Link>
                                        </li>
                                        <li>
                                            <Link to="#">hand saws</Link>
                                        </li>
                                        <li>
                                            <Link to="#">paddle mixers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">levels & measuring</Link>
                                        </li>
                                        <li>
                                            <Link to="#">mallets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">grout spreaders</Link>
                                        </li>
                                        
                                    </ul>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                Lighting & Electrical
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        lighting
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">indoor lights</Link>
                                        </li>
                                        <li>
                                            <Link to="#">outdoor lights</Link>
                                        </li>
                                        <li>
                                            <Link to="#">ceiling lights</Link>
                                        </li>
                                        <li>
                                            <Link to="#">floor lamps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">light bulbs</Link>
                                        </li>
                                        <li>
                                            <Link to="#">lamp shades</Link>
                                        </li>
                                        <li>
                                            <Link to="#">spotlights & downlights</Link>
                                        </li>
                                        <li>
                                            <Link to="#">light fixtures & fittings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">light switches & dimmers</Link>
                                        </li>
                                        
                                    </ul>
                            </li>  
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        electrical
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">cables</Link>
                                        </li>
                                        <li>
                                            <Link to="#">consumer units</Link>
                                        </li>
                                        <li>
                                            <Link to="#">mounting boxes</Link>
                                        </li>
                                        <li>
                                            <Link to="#">electrical tools & supplies</Link>
                                        </li>
                                        <li>
                                            <Link to="#">plugs</Link>
                                        </li>
                                        <li>
                                            <Link to="#">fuses</Link>
                                        </li>
                                        <li>
                                            <Link to="#">RCD plugs</Link>
                                        </li>
                                        
                                    </ul>
                            </li>  
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        home electrical
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">switches & sockets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">timers & controllers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Tv brackets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tv aeriels & accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="#">door bells</Link>
                                        </li>
                                        <li>
                                            <Link to="#">data networking</Link>
                                        </li>
                                        <li>
                                            <Link to="#">telephones & accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="#">mobile & tablet accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="#">batteries & chargers</Link>
                                        </li>
                                        
                                    </ul>
                            </li>  
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        safety & security
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">cctv & surveillance</Link>
                                        </li>
                                        <li>
                                            <Link to="#">burglar alarms</Link>
                                        </li>
                                        <li>
                                            <Link to="#">fire, heat & smoke alarms</Link>
                                        </li>
                                        <li>
                                            <Link to="#">safes & cash boxes</Link>
                                        </li>
                                        <li>
                                            <Link to="#">security lighting</Link>
                                        </li>
                                        <li>
                                            <Link to="#">cable & bike locks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">childrens' safety</Link>
                                        </li>
                                        <li>
                                            <Link to="#">fire extinguishers</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li>  
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        smart home
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">voice assistants</Link>
                                        </li>
                                        <li>
                                            <Link to="#">smart lighting</Link>
                                        </li>
                                        <li>
                                            <Link to="#">smart alarms</Link>
                                        </li>
                                        <li>
                                            <Link to="#">smart cameras</Link>
                                        </li>
                                        <li>
                                            <Link to="#">smart heating</Link>
                                        </li>
                                        <li>
                                            <Link to="#">smart door locks & bells</Link>
                                        </li>
                                        <li>
                                            <Link to="#">smart plugs</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="#">fire extinguishers</Link>
                                        </li> */}
                                        
                                        
                                    </ul>
                            </li>  
                                        
                            </ul>
                        </li>
                       
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                heating & plumbing
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        radiators
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">central heating radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">towel radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">column radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">designer radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">electric radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">oil filled radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">vertical radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">cast iron radiators</Link>
                                        </li>
                                        <li>
                                            <Link to="#">heating elements</Link>
                                        </li>
                                        <li>
                                            <Link to="#">radiator valves</Link>
                                        </li>
                                        <li>
                                            <Link to="#">radiator covers</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        plumbing
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">bathroom fittings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">pipe fittings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wastes & traps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">toilet fittings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">valves & stopcocks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">flexible connectors</Link>
                                        </li>
                                        <li>
                                            <Link to="#">elbows</Link>
                                        </li>
                                        <li>
                                            <Link to="#">pipe insulation</Link>
                                        </li>
                                        <li>
                                            <Link to="#">plubming tools</Link>
                                        </li>
                                        <li>
                                            <Link to="#">shower pumps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">cold water tanks</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                           </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                painting & decors
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        paint & decorating tools
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">Emulsion paint</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Masonry paint</Link>
                                        </li>
                                        <li>
                                            <Link to="#">spray paint</Link>
                                        </li>
                                        <li>
                                            <Link to="#">metal paint</Link>
                                        </li>
                                        <li>
                                            <Link to="#">oil paints</Link>
                                        </li>
                                        <li>
                                            <Link to="#">primer & undercoat</Link>
                                        </li>
                                        <li>
                                            <Link to="#">paint brushes & sprays</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wallpaper tools</Link>
                                        </li>
                                        <li>
                                            <Link to="#">paint rollers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">fillers, putty & caulk</Link>
                                        </li>
                                        <li>
                                            <Link to="#">paint removers & cleaning</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sealant & tapes</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sanding & abrassives</Link>
                                        </li>
                                        <li>
                                            <Link to="#">glue & adhesives</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        wallpaper & wall coverings
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">wallpaper</Link>
                                        </li>
                                        <li>
                                            <Link to="#">lining paper</Link>
                                        </li>
                                        <li>
                                            <Link to="#">murals</Link>
                                        </li>
                                        <li>
                                            <Link to="#">stickers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wallpaper borders</Link>
                                        </li>
                                        <li>
                                            <Link to="#">self adhesive wallpaper</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sticky back plastic</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                           </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                tools & equipment
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        power tools
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">drills</Link>
                                        </li>
                                        <li>
                                            <Link to="#">saws</Link>
                                        </li>
                                        <li>
                                            <Link to="#">sanders</Link>
                                        </li>
                                        <li>
                                            <Link to="#">angle grinders</Link>
                                        </li>
                                        <li>
                                            <Link to="#">power tool accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="#">kits & twinpacks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">screwdrivers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">nail guns</Link>
                                        </li>
                                        <li>
                                            <Link to="#">routers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">planers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">impact drivers & wrenches</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        Hand tools
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">spanners & wrenches</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tool kits</Link>
                                        </li>
                                        <li>
                                            <Link to="#">hammers & demolition</Link>
                                        </li>
                                        <li>
                                            <Link to="#">screwdrivers & keys</Link>
                                        </li>
                                        <li>
                                            <Link to="#">trowels, hawks & floats</Link>
                                        </li>
                                        <li>
                                            <Link to="#">knives & blades</Link>
                                        </li>
                                        <li>
                                            <Link to="#">planes, chisels & files</Link>
                                        </li>
                                        <li>
                                            <Link to="#">vices & clamps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">pliers & cutters</Link>
                                        </li>
                                        <li>
                                            <Link to="#">blow torches & soldering</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                            <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        equipments
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">tool storage</Link>
                                        </li>
                                        <li>
                                            <Link to="#">ladders & steps</Link>
                                        </li>
                                        <li>
                                            <Link to="#">safety & workwear</Link>
                                        </li>
                                        <li>
                                            <Link to="#">site equipment</Link>
                                        </li>
                                        <li>
                                            <Link to="#">vacuums & cleaners</Link>
                                        </li>
                                        <li>
                                            <Link to="#">car care & maintenance</Link>
                                        </li>
                                        <li>
                                            <Link to="#">torches & work lights</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tarpaulin, sheets & sacks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">garden tools</Link>
                                        </li>
                                        
                                        
                                    </ul>
                            </li> 
                           </ul>
                        </li>
                        
                        <li>
                            <Link to="#" >clearance sales</Link>
                        </li>
                       
                    </ul>
                </nav>
            </div>

        )
    }
}


export default SideBar;