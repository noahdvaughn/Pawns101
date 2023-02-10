//63e525ea074396131d829044
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditPlayerForm = () => {
  // let { playerId } = useParams()
  // console.log(playerId)
  let playerId = '63e525ea074396131d829044'
  const [currentPlayerData, setCurrentPlayerData] = useState({})

  useEffect(() => {
    const getPlayerDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/player/${playerId}`
      )
      // console.log(response.data.player)
      console.log(response.data.player.name)

      setCurrentPlayerData(response)

      console.log(currentPlayerData)
    }
    getPlayerDetails()
  }, [])

  const initialState = {
    name: currentPlayerData.name,
    nationality: currentPlayerData.nationality,
    elo: '',
    age: '',
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
