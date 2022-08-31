import React, { useEffect, useState } from "react";
import "./App.css";

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
  const [score, updateScore] = useState(0);

  const handleClick = (props) => {
    // get the current city being clicked on
    const cityName = props.className;
    // make sure the input is valid
    if (cityName === "" || cityName === undefined) {
      return
    }
    // create true entry for city for immutability
    const clickedCity = {[cityName]: true};
    if (!cityList[cityName]) {
      updateCityList(city => ({
        ...city,
        ...clickedCity
      }));
      updateScore(score + 1);
    } else {
      const falseList = Object.assign({}, cityList);
      Object.keys(falseList).forEach(key => {
        falseList[key] = false;
      });
      console.log(falseList)
      updateCityList(falseList)
      updateScore(0);
    }
    
  }

  useEffect(() => {
    <CardBuilder citylist = { cityList } />
  }, [cityList]);

  return (
    <div>
      <div className="header">
        <h1>Card Game Thing</h1>
        <p>{score}</p>
      </div>
      <div className="cardContainer">
        <CardBuilder
          onClick={handleClick}
          citylist={cityList} />
      </div>
    </div>
  );
}

function CardBuilder(props) {
  // click handler passes up the current target
  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick(event.target);
  }
  // get just the city names
  const cityList = Object.keys(props.citylist)
  // use map to take the city name and create the city card
  const gameBoard = cityList.map((city => 
  <div key={city} 
  onClick={handleClick}>
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
