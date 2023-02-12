import {Link} from 'react-router-dom'
const PlayerCard = ({player}) => {

  return <Link to={`/player-details/${player._id}`} state={{player:player}}>
    <h1>{player.name}</h1>
  </Link>
}
export default PlayerCard