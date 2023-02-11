//63e525ea074396131d829044
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditPlayerForm = ({ name, nationality, elo, age, favorite_opening }) => {
  let { playerId } = useParams()
  console.log(playerId)

  const initialState = {
    name: name,
    nationality: nationality,
    elo: elo,
    age: age,
    favorite_opening: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `http://localhost:3001/api/update-player/${playerId}`,
      formState
    )
    setFormState(initialState)
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
      ></select>

      <button type="submit">Edit Player</button>
    </form>
  )
}
export default EditPlayerForm
