    import React from 'react';
    import Logo from '../assets/logoETH.png';
    import { Link } from 'react-router-dom';
    import '../styles/Navbar.css';
    function Navbar() {
        return (
            <div className="navbar">
                <div className="leftSide">
                    <img src={Logo} />
                </div>
                <div className="rightSide"></div>
                    <Link to="/"> Home</Link>
                    <Link to="/cryptocurrency"> Cryptocurrency</Link>
                    <Link to="/login"> Login</Link>
                    <Link to="/about"> About</Link>
            </div>
        );
    }

    export default Navbar;