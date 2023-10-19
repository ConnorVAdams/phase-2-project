import React, {useState, useEffect, useRef} from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { Wrapper } from "@googlemaps/react-wrapper"
import GoogleMap from './GoogleMap'



const Map = () => {
  const navigate = useNavigate()
  const {parks} = useOutletContext()


  //TODO change back
  const loadGame = (parkID, path) => {
    //Provide three possible game paths.
    const games = ['/game/memory', '/game/hangman', '/game/arrow-game']
    const randomPath = games[Math.floor(Math.random() * games.length)]
    navigate('/game/arrow-game', { state: {id: parkID, path: '/game/arrow-game'} })
  }

  return (
    <>
      <div className='map' style={{ height: "100%", width: '100%' }}>
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} version="beta" libraries={["marker"]}>
          <GoogleMap loadGame={loadGame} parks={parks}/>
        </Wrapper>
      </div>
    </>
  )
}

export default Map
