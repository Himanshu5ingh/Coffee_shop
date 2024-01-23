import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            {/* about section start */}
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_taital_main">
                                <div className="about_taital">About Us</div>
                                <p className="about_text">Full cleaning and housekeeping services for companies and households.</p>
                                <p className="about_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                                <div className="read_bt"><Link to="/about">Read More</Link></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_img"><img src="images/about-img.png" alt='about_img' /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about section end */}
        </div>
    )
}

export default About