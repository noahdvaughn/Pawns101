import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PlayerDetails = () => {
  const location = useLocation()
  const { player } = location.state

  const DisplayElo = () => {
    if (player.elo) {
      return <h1>Elo: {player.elo}</h1>
    } else {
      return
    }
  }

  return (
    <div className="form">
      <h1>Name: {player.name}</h1>
      <h1>Nationality: {player.nationality}</h1>
      <h1>Age: {player.age}</h1>
      <DisplayElo />
      <h1>Favorite Opening: {player.favorite_opening}</h1>
      <Link to={`/edit-player/${player._id}`} state={{ player: player }}>
        <button>Edit Player?</button>
      </Link>
    </div>
  )
}
export default PlayerDetails
