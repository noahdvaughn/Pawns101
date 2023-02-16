//63e525ea074396131d829044
import { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const EditPlayerForm = ({ name, nationality, elo, age, favorite_opening }) => {
  let navigate = useNavigate()
  const location = useLocation()
  const { player } = location.state

  const initialState = {
    name: player.name,
    nationality: player.nationality,
    elo: player.elo,
    age: player.age,
    profile_url: player.profile_url,
    bio: player.bio,
    favorite_opening: player.favorite_opening
  }
  const [formState, setFormState] = useState(initialState)
  const [openingResults, setOpeningResults] = useState([])

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get('/api/all-openings')
      setOpeningResults(openingResponse.data.openings)
    }
    getAllOpenings()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`/api/edit-player/${player._id}`, formState)
    setFormState(initialState)
    await navigate('/view-players')
  }
  function ValidButton() {
    if (formState.name && formState.nationality && formState.age) {
      return (
        <button type="submit" className="validButton">
          Confirm Player Update
        </button>
      )
    } else {
      return <h3>Name, Nationality, and Age are required</h3>
    }
  }

  const deletePlayer = async () => {
    await axios.delete(`/api/delete-player/${player._id}`)
    await navigate('/view-players')
  }

  return (
    <form onSubmit={handleSubmit} className="editForm">
      <h1 className="pageTitle">Edit Player</h1>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="nationality">Nationality:</label>
      <input
        id="nationality"
        type="text"
        onChange={handleChange}
        value={formState.nationality}
      />
      <label htmlFor="elo">Elo:</label>
      <input
        id="elo"
        type="text"
        onChange={handleChange}
        value={formState.elo}
      />
      <label htmlFor="age">Age:</label>
      <input
        id="age"
        type="text"
        onChange={handleChange}
        value={formState.age}
      />
      <label htmlFor="profile_url">Profile Picture URL:</label>
      <input
        id="profile_url"
        type="text"
        onChange={handleChange}
        value={formState.profile_url}
      />
      <label htmlFor="bio">Bio:</label>
      <input
        id="bio"
        type="text"
        onChange={handleChange}
        value={formState.bio}
      />
      <label htmlFor="favorite_opening">Favorite Opening</label>

      <select
        id="favorite_opening"
        type="text"
        onChange={handleChange}
        value={formState.favorite_opening}
      >
        {' '}
        {openingResults.map((result) => (
          <option key={result._id}>{result.name}</option>
        ))}
      </select>

      <ValidButton />
      <button type="button" onClick={deletePlayer}>
        Delete Player?
      </button>
    </form>
  )
}
export default EditPlayerForm
