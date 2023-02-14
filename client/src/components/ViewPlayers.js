import { useEffect, useState } from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

const ViewPlayers = () => {
  const [playerResults, setPlayerResults] = useState([])

  useEffect(() => {
    const getAllPlayers = async () => {
      const playerResponse = await axios.get(
        'http://localhost:3001/api/all-players'
      )
      setPlayerResults(playerResponse.data.players)
    }
    getAllPlayers()
  }, [])

  return (
    <div>
      <h1>Players</h1>
      <div className="playerList">
        {playerResults.map((result) => (
          <PlayerCard key={result._id} player={result} />
        ))}
      </div>
    </div>
  )
}
export default ViewPlayers
