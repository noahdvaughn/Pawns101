import {Link} from 'react-router-dom'

const OpeningCard = ({opening}) => {
  

  return(
  <Link to={`/opening-details/${opening._id}`} state={{opening: opening}} className='opening-link'>
      <div className='opening-card'>
      <h1>{opening.name}</h1>

      </div>

    </Link>
  )

}
export default OpeningCard