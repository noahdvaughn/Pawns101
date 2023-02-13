import {Link} from 'react-router-dom'
const PlayerCard = ({player}) => {

  return <Link to={`/player-details/${player._id}`} state={{player:player}}className='player-link'>
    <h1 >{player.name}({player.elo})</h1>
  </Link>
}
export default PlayerCard