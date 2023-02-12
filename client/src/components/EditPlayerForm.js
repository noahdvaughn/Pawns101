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
    favorite_opening: player.favorite_opening
  }
  const [formState, setFormState] = useState(initialState)
  const [openingResults, setOpeningResults] = useState([])

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get(
        'http://localhost:3001/api/all-openings'
      )
      setOpeningResults(openingResponse.data.openings)
    }
    getAllOpenings()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `http://localhost:3001/api/edit-player/${player._id}`,
      formState
    )
    setFormState(initialState)
    await navigate('/view-players')
  }

  const deletePlayer = async () => {
    await axios.delete(`http://localhost:3001/api/delete-player/${player._id}`)
    await navigate('/view-players')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
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

      <button type="submit">Edit Player</button>
      <button type="button" onClick={deletePlayer}>
        Delete Player?
      </button>
    </form>
  )
}
export default EditPlayerForm
