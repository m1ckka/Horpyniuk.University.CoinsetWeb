import React from 'react'
import { cryptocurrencyList } from '../helpers/cryptocurrencyList'
import CryptocurrencyItem from "../components/CryptocurrencyItem";
import '../styles/Cryptocurrency.css'

function Cryptocurrency() {
    return (
    <div className="cryptocurrency">
        <h1 className="cryptocurrencyTitle"> Our best choice! </h1>
        <div className="cryptocurrencyList">
            {cryptocurrencyList.map((cryptocurrencyItem, key) => {
            return (
                <CryptocurrencyItem
                    key={key}
                    image={cryptocurrencyItem.image}
                    name={cryptocurrencyItem.name}
                    price={cryptocurrencyItem.price}
                />
            );
        })}
        </div>
    </div>
    );
}

export default Cryptocurrency;