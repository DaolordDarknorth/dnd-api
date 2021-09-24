import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// import { useAppContext } from '../Util/context'
import { Searchbar } from "../Components/Searchbar";
import { useFetch } from "../Util/useFetch";

export const Home = () => {
  const ref = useRef('test')

  const { spells, loading } = useFetch('')
  console.log(spells);
  // const {index,name,desc,range,duration} = useAppContext();
  if (loading) {
    return <div className="loading"></div>
  }


  return (
    <main className="Search-page">
      <section className="search-nav">
        <div className="searchbar">
          <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <h2>Search Dnd 5e Spells</h2>
            {/* <input type="text" className="form-input" value={ref.current} onChange={(e) => ref.current = e.target.value} /> */}
          </form>
        </div>
      </section>

      <section className="search-results">
        <div className="i-result">
          {spells.map((spell) => {
            const { name, index } = spell
            return <Link to={`/${index}`}>
              {name}
            </Link>
          })}
        </div>
      </section>
    </main>
  );
};


