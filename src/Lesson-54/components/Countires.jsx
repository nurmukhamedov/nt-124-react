import React from 'react';
import { useContext } from 'react';
import { FetchContext } from './FetchContext';
const Countires = () => {
    const { loading, countries } = useContext(FetchContext);

    if (loading) {
        return <div>Loading....</div>
    }

    console.log(countries);
    return (
        <div>Countires</div>
    )
}

export default Countires