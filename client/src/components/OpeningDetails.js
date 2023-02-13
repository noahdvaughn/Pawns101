import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const OpeningDetails = () => {
  const location = useLocation()
  const { opening } = location.state
  const [topPlayerResults, setTopPlayerResults] = useState([])

  const openingLength = opening.move_list.length
  let chessUrl = 'https://www.chess.com/explorer?moveList='
  let moveDisplay = ''
  opening.move_list.forEach((move, index) => {
    if (index === 0) {
      chessUrl += move
      moveDisplay += move
    } else {
      chessUrl += '+' + move
      moveDisplay += ', ' + move
    }
  })

  useEffect(() => {
    const getTopPlayers = async () => {
      const playerResponse = await axios.get(
        `http://localhost:3001/api/top-players/${opening.name}`
      )
      setTopPlayerResults(playerResponse.data.player)
    }
    getTopPlayers()
  }, [])

  const NotablePlayersDisplay = () => {
    if (topPlayerResults) {
      return (
        <div>
          <h2>Top Players:</h2>
          {topPlayerResults.map((result) => (
            <h2 key={result._id}>{result.name}</h2>
          ))}
        </div>
      )
    } else {
      return
    }
  }

  const ImageDisplay = () => {
    if (opening.opening_url) {
      return <img src={`${opening.opening_url}`} />
    } else {
      return
    }
  }

  const WinDisplay = () => {
    if (opening.master_win) {
      return <h2>Master's games win percent: {opening.master_win}%</h2>
    } else {
      return
    }
  }
  const LoseDisplay = () => {
    if (opening.master_lose) {
      return <h2>Master's games lose percent: {opening.master_lose}%</h2>
    } else {
      return
    }
  }
  const DrawDisplay = () => {
    if (opening.master_draw) {
      return <h2>Master's games win percent: {opening.master_draw}%</h2>
    } else {
      return
    }
  }

  const NotablePlayers = () => {}

  chessUrl += `&ply=${openingLength}`
  return (
    <div className="form">
      <h1>{opening.name}</h1>
      <ImageDisplay />
      <WinDisplay />
      <LoseDisplay />
      <DrawDisplay />
      <NotablePlayersDisplay />
      <h2>Moves: {moveDisplay}</h2>
      <Link to={`/edit-opening/${opening._id}`} state={{ opening: opening }}>
        <button>Edit Opening?</button>
      </Link>
      <Link to={`${chessUrl}`}>
        <button>Not sure where to move next?</button>
      </Link>
    </div>
  )
}
export default OpeningDetails
