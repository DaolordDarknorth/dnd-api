import { useState, useEffect } from 'react'


const API_ENDPOINT = `https://www.dnd5eapi.co/api/spells/`;

export const useFetch = (query) => {
    const [loading, setLoading] = useState(true)
    const [spells, setSpells] = useState({})

    const fetchSpells = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.results) {
                setSpells(data.results)
                setLoading(false)
            }else {
                setSpells(data)
                setLoading(false)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(`${API_ENDPOINT}${query}`);
        fetchSpells(`${API_ENDPOINT}${query}`);
    }, [query]);

    return { loading, spells, fetchSpells }
}