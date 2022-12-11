import Link from 'next/link';
const HomeB = ({ }) => {
    return (
        <div>
            <div classname="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card bg-success" style={{ maxWidth: 500 }}>
                            <div className="row g-0">
                                <div className="col-sm-5">
                                    <img src="../../guru.jpg" className="card-img-top h-60" alt="..." />
                                </div>
                                <div className="col-sm-7">
                                <div class="card-header"><h5 className="card-title text-light">Dosen</h5></div>
                                    <div className="card-body d-grid">
                                        <br />
                                        <Link href="/admin/datadosen">
                                        <button type="button" class="btn btn-dark ">Lihat Data</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card" style={{ maxWidth: 500 }}>
                    <div className="card bg-secondary" style={{ maxWidth: 500 }}>
                            <div className="row g-2">
                                <div className="col-sm-5">
                                    <img src="../../murid.jpg" className="card-img-top h-60" alt="..." />
                                </div>
                                <div className="col-sm-7">
                                <div class="card-header">
                                    <h5 className="card-title text-light">Mahasiswa</h5>
                                </div>
                                    <div className="card-body d-grid">
                                        <br />
                                        <Link href="/admin/datamahasiswa">
                                        <button type="button" class="btn btn-dark ">Lihat Data</button>
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card" style={{ maxWidth: 500 }}>
                    <div className="card bg-primary" style={{ maxWidth: 500 }}>
                            <div className="row g-2">
                                <div className="col-sm-5">
                                    <img src="../../admin.png" className="card-img-top h-60" alt="..." />
                                </div>
                                <div className="col-sm-7">
                                <div class="card-header"><h5 className="card-title text-light">Admin</h5></div>
                                    <div className="card-body d-grid">
                                        <br />
                                        <Link href="/admin/aadmin">
                                        <button type="button" class="btn btn-dark ">Lihat Data</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeB;