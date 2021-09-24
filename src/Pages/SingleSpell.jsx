import React from 'react'
import { useFetch } from '../Util/useFetch'
import { Link } from 'react-router-dom';

const SingleSpell = () => {
    console.log(window.location.pathname);
    const {spells : spell, loading} = useFetch(window.location.pathname)
    const {name, components, } = spell
    console.log(spell);
    return (
        <div>
            <h3>{name}</h3>
            <p>{components}</p>
            <Link to='/'>
                Back to Home
            </Link>
        </div>
    )
}

export default SingleSpell
