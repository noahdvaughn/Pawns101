import {Link} from 'react-router-dom'

const OpeningCard = ({opening}) => {


  const OpeningDisplay = () => {
    if (opening.opening_url) {
      return <img className='openingImage' src={`${opening.opening_url}`}/>
    } else {
      return <img className='openingImage' src='https://www.chess.com/dynboard?board=green&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR&piece=neo&size=2'/>
    }
  }
  return(
  <Link to={`/opening-details/${opening._id}`} state={{opening: opening}} className='opening-link'>
      <div className='opening-card'>
      <h2 className='openingTitle'>{opening.name}</h2>
      <OpeningDisplay/>
      </div>

    </Link>
  )

}
export default OpeningCard