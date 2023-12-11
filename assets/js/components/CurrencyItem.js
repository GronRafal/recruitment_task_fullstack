// src/components/CurrencyItem.js
import React from 'react';

const CurrencyItem = ({ currency, code, mid }) => {
    return (
        <dl>
            <dt>Currency:</dt>
            <dd>{currency}</dd>

            <dt>Code:</dt>
            <dd>{code}</dd>

            <dt>Mid:</dt>
            <dd>{mid}</dd>
        </dl>
    );
};

export default CurrencyItem;
