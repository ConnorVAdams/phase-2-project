import { calculateScore, handleWin } from './helpers.js'
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import './App.css'
import animals from './components/game/animalData.js'
import ParkCard from './components/ParkCard.js'

const URL = 'http://localhost:3000/parkObj'

function App() {
const [parks, setParks] = useState([])
const [points, setPoints] = useState(0)
const [card, setCard] = useState({
  park: {},
  displayCard: false
})

const fetchAllParks = () => {
  fetch(URL)
  .then(resp => resp.json())
  .then(data => setParks(data))
}

useEffect(() => {
  fetchAllParks()
}, [])

//Score calculator specific to memory game
  //TODO Can be generalized to calculate score for every game?
  const calculateScore = (finalTime, finalCount) => {
    const minimumMoves = 1
    const minimumTime = Date.now()
    //Awards player more points for lower number of moves and/or lower elapsed time, with a maximum of 10,000.
    //TODO What should maximum points for each game be?
    return Math.round((minimumTime / finalTime) * (minimumMoves / finalCount) * 10000)
  }

  //Receives elapsed time and number of moves from <AnimalBoard /> and passes it through calculateScore()
  const handleWin = (gameId, param1, param2) => {
    const score = calculateScore(param1, param2)
    //TODO Only patch score if new score is higher
    fetch(`${URL}/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gameWon: true,
        pointValue: score
      })
    })
    .then(resp => resp.json())
    .then(data => {
      setPoints(current => current + data.pointValue)
      setCard({...card,
        park: data,
        displayCard: true
      })
    })
    .then(fetchAllParks())
    console.log(`Congratulations, you earned ${score} points!`)
  }

  const resetCard = () => {
    setCard({
      park: {},
      displayCard: false
    })
  }

  //TODO handleWin
  // * 1. Calculate score
  // * 3. PATCH database with gameWon: true

  //4. Add card to trophy case & display score to user
  //5. Pop up card to user, user can navigate '/' from it.
  // * 6. Update points container.

  //7. Updates points/parks in userObj.


  return (
    <div className={card.displayCard ? 'wrapper hidden' : 'wrapper'}>
      <Header points={points} />
      <Outlet context={{ parks, handleWin }} />
      {card.displayCard ? <ParkCard park={card.park} resetCard={resetCard} /> : null}
      <Footer />
    </div>
  );
}

export default App;
