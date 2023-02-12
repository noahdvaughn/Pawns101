import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PlayerDetails = () => {
  const location = useLocation()
  const { player } = location.state

  return (
    <div>
      <h1>Name: {player.name}</h1>
      <h1>Nationality: {player.nationality}</h1>
      <h1>Elo: {player.elo}</h1>
      <h1>Age: {player.age}</h1>
      <h1>Favorite Opening: {player.favorite_opening}</h1>
      <Link to={`/edit-player/${player._id}`} state={{ player: player }}>
        Edit Player?
      </Link>
    </div>
  )
}
export default PlayerDetails
