import Link from "next/link";
import Script from 'next/script';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" ><FontAwesomeIcon icon={faMoon} size="1x" /> MoonHallo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/*-Nav Tengah-*/}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link active" aria-current="page">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link" >Berita</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dosen & Mahasiswa 
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link href="user/dosen">
                                    <li><a className="dropdown-item" href="#">Data Dosen</a></li>
                                    </Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link href="/user/mahasiswa"><a className="dropdown-item" href="#">Data Mahasiswa</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* Nav Kanan*/}
                    <div classname="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            {/*Notif*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faBell} />
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">Some news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            {/* Notification dropdown */}

                            {/* Icon dropdown */}
                            <li className="nav-item me-3 me-lg-0 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
        </div>
    )
}
export default Nav;