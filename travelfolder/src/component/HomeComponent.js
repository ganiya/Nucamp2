import React from 'react';
import adventure from "../img/adventure.jpeg" ;
import beach1 from "../img/beach1.jpeg" ;
import orleans from "../img/orleans.jpeg" ;
import antelope from "../img/antelope.jpg" ;
import beach2 from "../img/beach2.jpg" ;
import harborsc from "../img/harborsc.jpg" ;
import dccity from "../img/dccity.jpg" ;
import Havasu from "../img/Havasu-Falls.jpg" ;
import vermont from "../img/vermont.jpg" ;
import quote2 from "../img/quote2.jpg" ;
import quote1 from "../img/quote1.jpg" ;
import lacity from "../img/lacity.jpg" ;


function Home() {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <img src={adventure} alt="Forest" className="image" style={{ width: '100%' }} />
                    <div className="middle">
                        <div className="text">DISCOVER</div>
                    </div>
                </div>
                <div className="column">
                    <img src={beach1} alt="Forest" className="image" style={{ width: '100%' }} />
                    <div className="middle">
                        <div className="text">RELAX</div>
                    </div>
                </div>
                <div className="column">
                    <img src={orleans} alt="Mountains" className="image" style={{ width: '100%' }} />
                    <div className="middle">
                        <div className="text">PARTY</div>
                    </div>
                </div>
            </div>

            <br />


            <section className="subscription bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscription-wrapper">
                                <div
                                    className="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                                    <h3 className="flex-fill">Subscribe <br /> to our newsletter!</h3>
                                    <form action="#" className="row flex-fill">
                                        <div className="col-lg-7 my-md-2 my-2">
                                            <input type="email"
                                                className="form-control px-4 border-0 w-100 text-center text-md-left" id="email"
                                                placeholder="Your Email" name="email" />
                                        </div>
                                        <div className="col-lg-5 my-md-2 my-2"> <button type="submit"
                                            className="btn btn-primary btn-lg border-0 w-100">Subscribe Now</button> </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />



            <div className="container my-4">
                <br /><br /><br /><br /><br /><br />


            </div>
            <br /><br /><br /><br /><br />

            <p className="font-weight-bold">See the beauty for yourself!</p>

            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4">
                    <img src={quote1} className="img-fluid mb-4" alt="LA city" />
                    <img src={dccity} className="img-fluid mb-4" alt="" data-wow-delay="0.3s" />
                    <img src={Havasu} className="img-fluid mb-4" alt="" data-wow-delay="0.4s" />
                </div>
                <div className="col-lg-3 col-md-12 mb-4">
                    <img src={harborsc} className="img-fluid mb-4" alt="LA city" />
                    <img src={lacity} className="img-fluid mb-4" alt="LA city" />
                </div>
                <div className="col-lg-3 col-md-12 mb-4">
                    <img src={quote2} className="img-fluid mb-4" alt="" data-wow-delay="0.3s" />
                    <img src={beach2} className="img-fluid mb-4" alt="" data-wow-delay="0.5s" />

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <img src={antelope} className="img-fluid mb-4" alt="" data-wow-delay="0.1s" />

                    <img src={vermont} className="img-fluid mb-4" alt="" data-wow-delay="0.4s" />


                </div>
            </div>
        </div>
    );
}

export default Home;   