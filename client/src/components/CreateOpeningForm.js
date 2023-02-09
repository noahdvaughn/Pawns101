import { useState } from 'react'
import axios from 'axios'

const CreateOpeningForm = () => {
  const initialState = {
    name: '',
    master_win: null,
    master_lose: null,
    master_draw: null,
    notable_players: [],
    white_moves: [],
    black_moves: []
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/create-opening', formState)
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="master_win">Win percent:</label>
      <input
        id="master_win"
        type="text"
        onChange={handleChange}
        value={formState.master_win}
      />
      <label htmlFor="master_lose">Lose percent:</label>
      <input
        id="master_lose"
        type="text"
        onChange={handleChange}
        value={formState.master_lose}
      />
      <label htmlFor="master_draw">Draw percent:</label>
      <input
        id="master_draw"
        type="text"
        onChange={handleChange}
        value={formState.master_draw}
      />
      <button type="submit">Create New Opening</button>
    </form>
  )
}
export default CreateOpeningForm
