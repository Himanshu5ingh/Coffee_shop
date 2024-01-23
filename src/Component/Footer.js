import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/*footer section start */}
            <div class="footer_section layout_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <h3 class="useful_text">About</h3>
                            <p class="footer_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <h3 class="useful_text">Menu</h3>
                            <div class="footer_menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <h1 class="useful_text">Useful Link</h1>
                            <p class="dummy_text">Adipiscing Elit, sed do Eiusmod Tempor incididunt </p>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <h1 class="useful_text">Contact Us</h1>
                            <div class="location_text">
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left_10">Address : Loram
                                                Ipusm</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left_10">Call : +01
                                                1234567890</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i class="fa fa-envelope" aria-hidden="true"></i><span class="padding_left_10">Email :
                                                demo@gmail.com</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*footer section end*/}
        </div>
    )
}

export default Footer