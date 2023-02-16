import { useEffect, useState } from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

const ViewPlayers = () => {
  const [playerResults, setPlayerResults] = useState([])

  useEffect(() => {
    const getAllPlayers = async () => {
      const playerResponse = await axios.get('/api/all-players')
      setPlayerResults(playerResponse.data.players)
    }
    getAllPlayers()
  }, [])

  return (
    <div>
      <div className="topText">
        <h1 className="pageTitle">Players</h1>
        <h1 className="siteLogo">Pawns ♜o♜</h1>
      </div>
      <div className="playerList">
        {playerResults.map((result) => (
          <PlayerCard key={result._id} player={result} />
        ))}
      </div>
    </div>
  )
}
export default ViewPlayers
