import React from "react";
import { useAppContext } from '../Util/context'
import { Searchbar } from "../Components/Searchbar";

export const Home = () => {
  const {index,name,desc,range,duration} = useAppContext();
  return (
    <main className="Search-page">
      <section className="search-nav">
        <div className="searchbar">
        <Searchbar/>
        </div>
      </section>

      <section className="search-results">
        <div className="i-result">
          <div className={index}>
            <h3>{name}</h3>
            <h4>{desc}</h4>
            <h4>{range}</h4>
            <h4>{duration}</h4>
          </div>
        </div>
      </section>
    </main>
  );
};


