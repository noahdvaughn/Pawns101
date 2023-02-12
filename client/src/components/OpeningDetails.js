import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OpeningDetails = () => {
  const location = useLocation()
  const { opening } = location.state

  const openingLength = opening.move_list.length
  let chessUrl = 'https://www.chess.com/explorer?moveList='
  opening.move_list.forEach((move, index) => {
    if (index === 0) {
      chessUrl += move
    } else {
      chessUrl += '+' + move
    }
  })
  chessUrl += `&ply=${openingLength}`
  console.log(chessUrl)

  return (
    <div>
      <h1>{opening.name}</h1>
      <h2>Master's games win percent: {opening.master_win}%</h2>
      <h2>Master's games lose percent: {opening.master_lose}%</h2>
      <h2>Master's games draw percent: {opening.master_draw}</h2>
      <h2>Moves: {opening.move_list}</h2>
      <Link to={`/edit-opening/${opening._id}`} state={{ opening: opening }}>
        Edit Opening?
      </Link>
      <Link to={`${chessUrl}`}>Not sure where to move next?</Link>
    </div>
  )
}
export default OpeningDetails
