import {Link} from 'react-router-dom'
const PlayerCard = ({player}) => {

  const PlayerPic = () => {
    if (player.profile_url){
      return <img  className='profilePic'src={`${player.profile_url}`}/>
    } else {
      return <img className='profilePic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_KlnkAkrr10HZoUii1ShdmCDN25m-Ovg7A&usqp=CAU'/>
    }
  }
  const DisplayElo = () => {
    if (player.elo){
      return <h1 className='thinLetters'>({player.elo})</h1>
    } else {
      return
    }
  }

  return <Link to={`/player-details/${player._id}`} state={{player:player}}className='playerLink'>
    <div className='playerLinkDiv'>
    <PlayerPic/>
    <h1 className='thinLetters' >{player.name}</h1>
    <DisplayElo/>
    </div>
  </Link>
}
export default PlayerCard