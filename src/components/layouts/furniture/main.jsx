import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import SpecialProducts from "./special-products"
// import BlogSection from "../common/blogsection"
import HeaderTwo from "../../common/headers/header-two"
import ThemeSettings from "../../common/theme-settings"
import FooterOne from "../../common/footers/footer-one";

class Furniture extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color13.css` );
    }

    render(){
        return (
            <div>
                <HeaderTwo logoName={'logo/cognet1.png'} />
                <Helmet>
                    <title>Cognet | Online Construction Materials Store</title>
                    <meta name="description" content="Cognet – Purchase your construction materials and get it delivered directly to your site at affordable cost." />
                </Helmet>
                <section className="p-0 small-slider">
                    <Slider autoplay className="slide-1 home-slider">
                        <div>
                            <div className="home home62 text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                            <div>
                                            <div style={{backgroundColor: "#8DBBEE",padding:15}}>
                                                    <h4>Indoor Decors & Materials</h4>
                                                    <h1>Fittings - Tiles - Doors  </h1></div>
                                                    <a href="#" className="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home61 text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                <div style={{backgroundColor: "#8DBBEE",padding:15}}>
                                                    <h4>Outdoor Materials</h4>
                                                    <h1>Blocks - Pumps - Storage Tanks </h1></div>
                                                    <a href="#" className="btn btn-solid">shop
                                                    now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home60 text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                            <div>
                                                <div style={{backgroundColor: "#8DBBEE",padding:15}}>
                                                    <h4>All Building Materials</h4>
                                                    <h1>Plumbing - Roofing - Iron rods </h1></div>
                                                    <a href="#" className="btn btn-solid">shop
                                                    now</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home63 text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <div style={{backgroundColor: "#8DBBEE",padding:15}}>
                                                        <h4>Modern Kitchen Accessories</h4>
                                                        <h1>Cabinets - Kitchen Sinks </h1></div>
                                                        <a href="#" className="btn btn-solid">shop
                                                        now</a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home64 text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <div style={{backgroundColor: "#8DBBEE",padding:15}}>
                                                        <h4>Luxuruious Bathroom Materials</h4>
                                                        <h1>Sanitary Wares </h1></div>
                                                        <a href="#" className="btn btn-solid">shop
                                                        now</a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*Collection Banner section*/}
                <section className="banner-furniture ratio_45">
                    <div className="container-fluid">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img style={{height:180}} src={`${process.env.PUBLIC_URL}/assets/images/furniture/closet.jpg`} alt=""
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>Water Closet</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img style={{height:180}} src={`${process.env.PUBLIC_URL}/assets/images/furniture/sink1.jpg`} alt=""
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>Kitchen Sink</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img style={{height:180}} src={`${process.env.PUBLIC_URL}/assets/images/furniture/secDoor.jpg`} alt=""
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>Security Doors</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Collection Banner section end*/}

                {/*Special Products Start*/}
                <SpecialProducts type={'furniture'} />
                {/*Special Products End*/}

                {/*Parallax banner*/}
                {/* <section className="p-0">
                    <div className="full-banner parallax parallax-banner3  text-center p-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                        <h2>2018</h2>
                                        <h3>interior design in home</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*Parallax banner end*/}


                {/* Blog Section Section*/}
                {/* <section className="blog blog-2 section-b-space ratio3_2">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <div className="title1">
                                    <h4>Recent Story</h4>
                                    <h2 className="title-inner1">from the blog</h2>
                                    <hr role="tournament6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSection />
                </section> */}
                {/* Blog Section End*/}

                <ThemeSettings/>

                <FooterOne logoName={'logo/cognet1.png'} />
            </div>
        )
    }
}


export default Furniture;