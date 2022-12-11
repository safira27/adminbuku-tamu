import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start text-white bg-dark">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Links */}
                    <section className>
                        {/*Grid row*/}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h5 className="text mb-4 font-weight-bold">
                                <FontAwesomeIcon icon={faMoon} /> MoonHallo
                                </h5>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a className="text-white">MDBootstrap</a>
                                </p>
                                <p>
                                    <a className="text-white">MDWordPress</a>
                                </p>
                                <p>
                                    <a className="text-white">BrandFlow</a>
                                </p>
                                <p>
                                    <a className="text-white">Bootstrap Angular</a>
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a className="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><FontAwesomeIcon icon={faHome} /> New York, NY 10012, US</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> info@gmail.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
                                
                            </div>
                            {/* Grid column */}
                        </div>
                        {/*Grid row*/}
                    </section>
                </div>
                {/* Grid container */}
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}
export default Footer;