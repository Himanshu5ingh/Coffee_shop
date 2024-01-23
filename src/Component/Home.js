import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            {/* banner section start */}
            <div class="banner_section layout_padding">
                <div class="container">
                    <div id="main_slider" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="banner_taital">
                                            <h1 class="outstanding_text">Outstanding</h1>
                                            <h1 class="coffee_text">Coffee Shop</h1>
                                            <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                                            <div class="learnmore_bt"><a href="#">Learn More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="banner_taital">
                                            <h1 class="outstanding_text">Outstanding </h1>
                                            <h1 class="coffee_text">Coffee Shop</h1>
                                            <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                                            <div class="learnmore_bt"><a href="#">Learn More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="banner_taital">
                                            <h1 class="outstanding_text">Outstanding </h1>
                                            <h1 class="coffee_text">Coffee Shop</h1>
                                            <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                                            <div class="learnmore_bt"><a href="#">Learn More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            { /*banner section end */}
        </div>
    )
}

export default Home