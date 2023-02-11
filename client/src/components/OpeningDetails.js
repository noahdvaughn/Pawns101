import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OpeningDetails = () => {
  const location = useLocation()
  const { opening } = location.state
  console.log(opening)

  return (
    <div>
      <h1>{opening.name}</h1>
      <Link to={`/edit-opening/${opening._id}`}>Edit Opening?</Link>
    </div>
  )
}
export default OpeningDetails
