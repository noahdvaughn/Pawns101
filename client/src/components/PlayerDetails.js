import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PlayerDetails = () => {
  const location = useLocation()
  const { player } = location.state
  const [openingResults, setOpeningResults] = useState([])

  console.log(player.favorite_opening)

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get(
        `/api/opening-search/${player.favorite_opening}`
      )
      setOpeningResults(openingResponse.data.opening[0])
    }
    getAllOpenings()
  }, [])

  const DisplayElo = () => {
    if (player.elo) {
      return <h2>Elo: {player.elo}</h2>
    } else {
      return
    }
  }
  const PlayerPic = () => {
    if (player.profile_url) {
      return <img className="displayProfilePic" src={`${player.profile_url}`} />
    } else {
      return (
        <img
          className="displayProfilePic"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_KlnkAkrr10HZoUii1ShdmCDN25m-Ovg7A&usqp=CAU"
        />
      )
    }
  }
  const DisplayBio = () => {
    if (player.bio) {
      return <h2>About: {player.bio}</h2>
    } else {
      return
    }
  }
  return (
    <div className="form">
      <PlayerPic />
      <h2>Name: {player.name}</h2>
      <h2>Nationality: {player.nationality}</h2>
      <h2>Age: {player.age}</h2>
      <DisplayElo />
      <DisplayBio />
      <div>
        <h2>Favorite Opening:</h2>
        <Link
          to={`/opening-details/${openingResults._id}`}
          state={{ opening: openingResults }}
          style={{ textDecoration: 'white underline' }}
        >
          <h2>{player.favorite_opening}</h2>
        </Link>
      </div>

      <Link to={`/edit-player/${player._id}`} state={{ player: player }}>
        <button>Edit Player?</button>
      </Link>
    </div>
  )
}
export default PlayerDetails
