import React, { useState } from "react"
import { Link } from "gatsby"
import { ImMenu } from "react-icons/im"
import logo from "../assets/images/blogger1.png"
const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="b" />
                    </Link>
                    <button className="nav-btn" onClick={() => setShow(!show)}>
                        <ImMenu />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <div className="nav-linker">
                        <Link
                            to="/"
                            className="nav-link"
                            activeClassName="active-link"
                            onClick={() => setShow(false)}
                        >
                            Strona Główna
                        </Link>
                        <Link
                            to="/about"
                            className="nav-link"
                            activeClassName="active-link"
                            onClick={() => setShow(false)}
                        >
                            O nas
                        </Link>
                    </div>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn" onClick={() => setShow(false)}>
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar