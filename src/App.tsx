import React from 'react';
import {  Home } from "./pages/Home";
import {Link, Route, Routes} from "react-router-dom";
import {RegisterCompany} from "./pages/RegisterCompany";
import {RegisterUser} from "./pages/RegisterUser";

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/">Home</a>
                                </li></li>
                            <li className="nav-item">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/registerCompany">Register Company</a>
                                </li></li>
                            <li className="nav-item">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/registerUser">Register User</a>
                                </li></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/registerCompany"} element={<RegisterCompany/>}/>
                <Route path={"/registerUser"} element={<RegisterUser/>} />
            </Routes>
        </>
    )
}
export default App;