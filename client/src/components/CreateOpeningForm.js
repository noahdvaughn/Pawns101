import { useState } from 'react'
import axios from 'axios'

const CreateOpeningForm = () => {
  const initialState = {
    name: '',
    master_win: '',
    master_lose: '',
    master_draw: '',
    notable_players: [],
    move_list: '',
    move_list_array: []
  }
  const [formState, setFormState] = useState(initialState)
  const [movenum, setMovenum] = useState(1)

  const handleChange = (event) => {
    if (typeof [event.target.id] === 'array') {
      event.preventDefault()
      event.target.id.push(event.target.value)
    } else {
      setFormState({ ...formState, [event.target.id]: event.target.value })
    }
  }
  console.log(formState.move_list)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/create-opening', formState)
    setFormState(initialState)
  }

  const addMove = () => {
    formState.move_list_array.push(...formState.move_list)
    setMovenum(movenum + 1)
  }
  console.log(formState.move_list)
  console.log(formState.move_list_array)

  return (
    <form onSubmit={handleSubmit} className="form">
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
      <label htmlFor="move_list">Move {movenum}</label>
      <input
        id="move_list"
        type="text"
        onChange={handleChange}
        value={formState.move_list}
      />

      <button type="button" id="move_list" onClick={addMove}>
        Add Move
      </button>

      <button type="submit">Create New Opening</button>
    </form>
  )
}
export default CreateOpeningForm
