import React from "react";
import image from "../Component/Image/suzuki.png"

function NavBar() {
     return (
          <div>
               <nav className="navbar navbar-expand-lg  bg-danger">
                    <div className="container-fluid">
                         <a className="navbar-brand col-5" href="#">
                              <img src={image} alt="" srcset="" height={50} className="ps-5" />
                         </a>
                         <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <span className="navbar-toggler-icon" />
                         </button>
                         <div className="collapse navbar-collapse " id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                   <li className="nav-item">
                                        <a className="nav-link active text-light fw-bold" aria-current="page" href="#">
                                             Home
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-light fw-bold" href="#">
                                             About us
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-light fw-bold" href="#">
                                             Products
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-light fw-bold" href="#">
                                             Contact
                                        </a>
                                   </li>


                              </ul>
                              <form className="d-flex" role="search">
                                   <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                   />
                              </form>
                         </div>
                    </div>
               </nav>
          </div>
     );
}

export default NavBar;
