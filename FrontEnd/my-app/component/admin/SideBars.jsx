//@ts-check
import Link from 'next/link';
import Script from 'next/script';
const SideBars = ({ children }) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline"><i className="bi bi-bank2 m-2" /> Admin Page</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                <Link href="/admin/">
                                    <a className="nav-link align-middle px-0 text-light">
                                        <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </Link>
                                </li>
                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 text-light align-middle">
                                        <i className="fs-4 bi bi-people-fill" /> <span className="ms-1 d-none d-sm-inline">Mahasiswa</span> </a>
                                    <ul className="collapse show nav  flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link href="/admin/datamahasiswa">
                                            <a href="#" className="nav-link text-light px-0"> <span className="d-none d-sm-inline">Data Mahasiswa</span> </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/tambahmahasiswa">
                                            <a href="#" className="nav-link text-light px-0"> <span className="d-none d-sm-inline">Tambah Mahasiswa</span></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 text-light align-middle">
                                        <i className="fs-4 bi bi-people-fill" /> <span className="ms-1 d-none d-sm-inline">Dosen</span> </a>
                                    <ul className="collapse show nav  flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link href="/admin/datadosen">
                                            <a href="#" className="nav-link text-light px-0"> <span className="d-none d-sm-inline">Data Dosen</span> </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/tambahdosen">
                                            <a href="#" className="nav-link text-light px-0"> <span className="d-none d-sm-inline">Tambah Dosen</span></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 text-light align-middle">
                                        <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Nilai</span> </a>
                                    <ul className="collapse show nav  flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link href="/admin/datanilai">
                                            <a href="#" className="nav-link text-light px-0"> <span className="d-none d-sm-inline">Data Nilai</span> </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/tambahnilai">
                                            <a href="#" className="nav-link text-light px-0"> <span className="d-none d-sm-inline">Tambah Nilai</span></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="../admin.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">Admin</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col py-3">
                        {children}
                    </div>
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
        </div>
    );
}

export default SideBars;