import React from 'react'
// import { useAppContext } from '../Util/context'

export const Searchbar = ({filterParams, setFilterParams}) => {
    // const {query, setQuery, error} = useAppContext();
    // console.log(error)
    return (
        <form onSubmit={(e)=>e.preventDefault()} className="search-form">
            <h2>Search Dnd 5e Spells</h2>
            <input type="text" className="form-input" value={filterParams} onChange={(e) => setFilterParams(e.target.value)} />
        </form>
    )
}

