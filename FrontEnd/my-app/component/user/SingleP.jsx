const SingleP = () => {
    return (
        <div>
            <br /><br /><br />
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src="../../male.jpg" alt="Card image cap" id="product-detail" />
                            </div>
                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Nama : </h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="">Richard Charlos Fernando</p>
                                        </li><br />
                                        <li className="list-inline-item">
                                            <h6>Nim : </h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="">1120101925</p>
                                        </li><br />
                                        <li className="list-inline-item">
                                            <h6>Angkatan : </h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="">2020</p>
                                        </li><br />
                                        <li className="list-inline-item">
                                            <h6>Prodi : </h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="">TI</p>
                                        </li>
                                    </ul>
                                    <h6>Alamat :</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>

    )
}
export default SingleP;