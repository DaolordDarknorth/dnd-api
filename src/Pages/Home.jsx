import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// import { useAppContext } from '../Util/context'
import { Searchbar } from "../Components/Searchbar";
import { useFetch } from "../Util/useFetch";
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
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
        <div className="search-bar">
          <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <h2>Search Dnd 5e Spells</h2>
            {/* <input type="text" className="form-input" value={ref.current} onChange={(e) => ref.current = e.target.value} /> */}
          </form>
        </div>
      </section>

      <section className="search-results">
        <Row className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card className="asso-cards">
                {spells.map((spell) => {
                  const { name, index } = spell
                  return (
                    <Card.Body>
                      <Link to={`/${index}`}>
                        <Card.Title>
                          {name}
                        </Card.Title>
                      </Link>
                      <Card.Text>
                        test2
                      </Card.Text>
                    </Card.Body>
                  )
                })}
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
};


// {spells.map((spell) => {
//   const { name, index } = spell
//   return <Link to={`/${index}`}>
//     {name}
//   </Link>
// })}