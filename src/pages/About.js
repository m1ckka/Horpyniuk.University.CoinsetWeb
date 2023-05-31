import React from 'react'
import back_2 from "../assets/background_2.png";
import "../styles/About.css"
function About() {
    return (
        <div className="about">
            <div className='aboutTop'
                 style={{ backgroundImage: `url(${back_2})` }}
            ></div>
            <div className='aboutBottom'>
                <h1> ABOUT US </h1>
                <p> Coinset is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space.
                    Its mission is to make crypto discoverable and efficient globally by empowering retail users with unbiased, high quality and accurate information for drawing their own informed conclusions.
                    Founded by Brandon Chez in May 2013, CoinMarketCap has quickly grown to become the most trusted source by users, institutions, and media for comparing thousands of cryptoassets and is commonly cited by CNBC, Bloomberg, and other major news outlets.
                    (Even the U.S. government uses CoinMarketCap's data for research and reports!)
                    In April 2020, CoinMarketCap was acquired by Binance Capital Mgmt.
                    Binance is the global blockchain company behind the world's largest digital asset exchange by trading volume and users, which shares the common vision of making crypto accessible and systemically important to people all around the world.
                    Through the acquisition, CoinMarketCap plans to tap into its parent company's extensive resources to acquire more in-depth data into projects, reduce information asymmetry in the crypto industry and bring higher-quality data to its hundreds of millions of users.</p>
            </div>
        </div>
    )
}

export default About