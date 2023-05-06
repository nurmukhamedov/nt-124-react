import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCountriesData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        fetchCountriesData();
    }, [])

    return (
        <FetchContext.Provider value={{ loading, countries }}>
            {children}
        </FetchContext.Provider>
    )
}