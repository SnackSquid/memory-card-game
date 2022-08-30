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

  useEffect(() => {
    // to do
  }, [cityList]);

  return (
    <div className="cardContainer">
      <CardBuilder citylist={cityList} />
    </div>
  );
}

function CardBuilder(props) {
  const cityList = Object.keys(props.citylist)
  const gameBoard = [];
  for (let i = 0; i < cityList.length; i++) {
    const cityName = cityList[i];
    gameBoard.concat(city);
  }

  return gameBoard;
}

export default App;
