import Link from "next/link";
const Mahasiswa = () => {
    return (
        <div>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 class="h1">Data Mahasiswa</h1>
                            <br />
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/user/singlep">
                                    <a>
                                        <img src="../male.jpg" className="card-img-top" alt="..." />
                                    </a>
                                    </Link>
                                <div className="card-body">
                                    <Link href="/user/"><a className="h5 text-decoration-none text-dark">Richard Charlos Fernando</a></Link>
                                    <br /><br />
                                    <p className="card-text">
                                        Nim :1120101925
                                    </p>
                                    <p className="card-text">
                                        Prodi : S1 Teknik Informatika
                                    </p>
                                    <p className="card-text">
                                        Angkatan : 2020
                                    </p>
                                    <a class="btn btn-dark col-12" href="" role="button">Lihat Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/user/singlep">
                                    <a>
                                        <img src="../female.jpg" className="card-img-top" alt="..." />
                                    </a>
                                    </Link>
                                <div className="card-body">
                                    <Link href="/user/"><a className="h5 text-decoration-none text-dark">Michell</a></Link>
                                    <br /><br />
                                    <p className="card-text">
                                        Nim :1120101926
                                    </p>
                                    <p className="card-text">
                                        Prodi : S1 Teknik Informatika
                                    </p>
                                    <p className="card-text">
                                        Angkatan : 2020
                                    </p>
                                    <a class="btn btn-dark col-12" href="" role="button">Lihat Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/user/singlep">
                                    <a>
                                        <img src="../female_user.png" className="card-img-top" alt="..." />
                                    </a>
                                    </Link>
                                <div className="card-body">
                                    <Link href="/user/"><a className="h5 text-decoration-none text-dark">Adela</a></Link>
                                    <br /><br />
                                    <p className="card-text">
                                        Nim :1120101927
                                    </p>
                                    <p className="card-text">
                                        Prodi : S1 Teknik Informatika
                                    </p>
                                    <p className="card-text">
                                        Angkatan : 2020
                                    </p>
                                    <a class="btn btn-dark col-12" href="" role="button">Lihat Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/user/singlep">
                                    <a>
                                        <img src="../male_user.png" className="card-img-top" alt="..." />
                                    </a>
                                    </Link>
                                <div className="card-body">
                                    <Link href="/user/"><a className="h5 text-decoration-none text-dark">Raihan Nauval</a></Link>
                                    <br /><br />
                                    <p className="card-text">
                                        Nim :1120101928
                                    </p>
                                    <p className="card-text">
                                        Prodi : S1 Teknik Informatika
                                    </p>
                                    <p className="card-text">
                                        Angkatan : 2020
                                    </p>
                                    <a class="btn btn-dark col-12" href="" role="button">Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/user/singlep">
                                    <a>
                                        <img src="../female_user.png" className="card-img-top" alt="..." />
                                    </a>
                                    </Link>
                                <div className="card-body">
                                    <Link href="/user/"><a className="h5 text-decoration-none text-dark">Rini</a></Link>
                                    <br /><br />
                                    <p className="card-text">
                                        Nim :1120101929
                                    </p>
                                    <p className="card-text">
                                        Prodi : S1 Teknik Informatika
                                    </p>
                                    <p className="card-text">
                                        Angkatan : 2020
                                    </p>
                                    <a class="btn btn-dark col-12" href="" role="button">Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/user/singlep">
                                    <a>
                                        <img src="../male.jpg" className="card-img-top" alt="..." />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <Link href="/user/"><a className="h5 text-decoration-none text-dark">Rizki Nauval</a></Link>
                                    <br /><br />
                                    <p className="card-text">
                                        Nim :1120101930
                                    </p>
                                    <p className="card-text">
                                        Prodi : S1 Teknik Informatika
                                    </p>
                                    <p className="card-text">
                                        Angkatan : 2020
                                    </p>
                                    <a class="btn btn-dark col-12" href="" role="button">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="...">
                    <ul class="pagination pagination-md justify-content-center">
                        <li class="page-item disabled">
                            <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">2</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </section><br /><br />
        </div>
    )
}

export default Mahasiswa;