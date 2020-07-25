import React from 'react';
import adventure from "../img/adventure.jpeg"

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
                    <img src="img/beach1.jpeg" alt="Forest" className="image" style={{ width: '100%' }} />
                    <div className="middle">
                        <div className="text">RELAX</div>
                    </div>
                </div>
                <div className="column">
                    <img src="img/orleans.jpeg" alt="Mountains" className="image" style={{ width: '100%' }} />
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
                    <img src="/img/quote1.jpg" className="img-fluid mb-4" alt="LA city" />
                    <img src="/img/dccity.jpg" className="img-fluid mb-4" alt="" data-wow-delay="0.3s" />
                    <img src="/img/Havasu-Falls.jpg" className="img-fluid mb-4" alt="" data-wow-delay="0.4s" />
                </div>
                <div className="col-lg-3 col-md-12 mb-4">
                    <img src="/img/harborsc.jpg" className="img-fluid mb-4" alt="LA city" />
                    <img src="/img/lacity.jpg" className="img-fluid mb-4" alt="LA city" />
                </div>
                <div className="col-lg-3 col-md-12 mb-4">
                    <img src="img/quote2.jpg" className="img-fluid mb-4" alt="" data-wow-delay="0.3s" />
                    <img src="img/beach2.jpg" className="img-fluid mb-4" alt="" data-wow-delay="0.5s" />

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <img src="img/antelope.jpg" className="img-fluid mb-4" alt="" data-wow-delay="0.1s" />

                    <img src="/img/vermont.jpg" className="img-fluid mb-4" alt="" data-wow-delay="0.4s" />


                </div>
            </div>
        </div>
    );
}

export default Home;   