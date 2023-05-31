import React from "react"


function CryptocurrencyItem({image, name, price}) {
    return (
       <div className="CryptocurrencyItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price}</p>
       </div>
    );
}


export default CryptocurrencyItem