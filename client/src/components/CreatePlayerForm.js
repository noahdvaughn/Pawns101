import { useState } from 'react'
import axios from 'axios'

const CreatePlayerForm = () => {
  const initialState = {
    name: '',
    nationality: '',
    elo: '',
    age: '',
    favorite_opening: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  console.log(formState.move_list)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/create-player', formState)
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

      <button type="submit">Create New Opening</button>
    </form>
  )
}
export default CreatePlayerForm
