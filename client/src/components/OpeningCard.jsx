import {Link} from 'react-router-dom'

const OpeningCard = ({opening}) => {
  

  return(
    <Link to={`/opening-details/${opening._id}`} state={{opening: opening}}>
      <h1>{opening.name}</h1>

    </Link>
  )

}
export default OpeningCard