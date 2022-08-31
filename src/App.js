import React, { useEffect, useState } from "react";
import "./App.css";
import newyorkcity from "./images/triston-dunn-rfj_wOYQkus-unsplash.jpg";

function App() {
  // use state to maintain a list of cities and if they've
  // been clicked or not
  const [cityList, updateCityList] = useState({
    "New York City": false,
    "Los Angeles": false,
    Chicago: false,
    Houston: false,
    Phoenix: false,
    Philadelphia: false,
    "San Antonio": false,
    "San Diego": false,
    Dallas: false,
    "San Jose": false,
    Austin: false,
    Jacksonville: false,
    "Fort Worth": false,
  });

  useEffect(function clickCard() {
    // to do 
    < CardBuilder citylist = { cityList } />
  }, [cityList]);

  return (
    <div>
      <div className="header">
        <h1>Card Game Thing</h1>
        <p></p>
      </div>
      <div className="cardContainer">
        <CardBuilder
          onClick={useEffect(clickCard)}
          citylist={cityList} />
      </div>
    </div>
  );
}

function CardBuilder(props) {

  const cityList = Object.keys(props.citylist)
  const gameBoard = cityList.map((city => 
  <div key={city} onClick={props.onClick}>
    <img className={city} alt={city} />
    <h3>{city}</h3>
    </div>));
  // credit for sorting algorithm to
  // Nitin Patel && Donald E. Knuth
  // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
  for (let i = gameBoard.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = gameBoard[i]
    gameBoard[i] = gameBoard[j]
    gameBoard[j] = temp
  }
  return gameBoard;
}

export default App;
