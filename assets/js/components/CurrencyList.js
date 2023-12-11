import React from 'react';

const CurrencyList = ({ ratesData }) => {
    console.log('Otrzymane rates w CurrencyList:', ratesData);

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Exchange Rates:</h3>
            {Object.keys(ratesData).map((key, index) => (
                <div key={index} style={styles.currencyContainer}>
                    <p style={styles.currency}>Currency: {ratesData[key].currency}</p>
                    <p style={styles.code}>Code: {ratesData[key].code}</p>
                    <p style={styles.mid}>Mid: {ratesData[key].mid}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    title: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    currencyContainer: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '3px',
    },
    currency: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    code: {
        marginBottom: '5px',
    },
    mid: {
        color: '#007bff', // Kolor niebieski
    },
};

export default CurrencyList;
