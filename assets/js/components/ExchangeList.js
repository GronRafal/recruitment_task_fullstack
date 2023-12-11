import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';

const ExchangeList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost/exchange-rates')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (Array.isArray(data)) {
                    setData(data);
                } else if (typeof data === 'object' && data !== null) {
                    // Dane są już obiektem JSON
                    setData(data);
                } else {
                    console.error('Niepoprawny format danych:', data);
                }
            })
    }, []);

    return (
        <div>
            <CurrencyList ratesData={data} />
        </div>
    );
};

export default ExchangeList;
