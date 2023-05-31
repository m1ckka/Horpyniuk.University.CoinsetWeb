import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/Untitled99.png'
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">

            <h1>Coinset</h1>
                <p> Welcome to CryptoWorld! </p>
                <Link to="/cryptocurrency">
                <button> Tap for details </button>
                </Link>
                <Link to="/login">
                    <button> Tap for registration </button>
                </Link>
            </div>
        </div>
    );
}

export default Home