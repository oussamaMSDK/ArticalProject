import React from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = (props) => {

    const nav = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ marginLeft: "80px" }} href="/"><h3><b>Logo</b></h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 justify-content-end ">
                        <li className="text-center">
                            <p className="nav-link active d-inline" onClick={() => nav('/')} style={{ cursor: "pointer",color:props.colHome }}><b>Home</b> </p >
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <button className="btn m-3" onClick={() => {nav('/login'); }} style={{ backgroundColor: "#E96363", color: "white", padding: "15px 35px 15px 35px", borderRadius: "15px" }} type="submit">Login</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav