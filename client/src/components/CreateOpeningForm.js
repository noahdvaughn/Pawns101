import { useState } from 'react'
import axios from 'axios'

const CreateOpeningForm = () => {
  const [invisible, setInvisible] = useState('')
  const [current_move, setCurrentMove] = useState('')
  const initialState = {
    name: '',
    master_win: '',
    master_lose: '',
    master_draw: '',
    notable_players: [],
    move_list: []
  }
  const [formState, setFormState] = useState(initialState)
  const [movenum, setMovenum] = useState(1)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleMoveChange = (e) => {
    e.preventDefault()
    setCurrentMove(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/create-opening', formState)
    setFormState(initialState)
  }

  const addMove = (e) => {
    e.preventDefault()
    formState.move_list.push(current_move)
    setMovenum(movenum + 1)
    setCurrentMove('')
    if (movenum > 9) {
      setInvisible('invisible')
      console.log('working')
    }
  }
  console.log(invisible)

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
      <label htmlFor="move_list" className={invisible}>
        Move {movenum}
      </label>
      <input
        id="current_move"
        type="text"
        onChange={handleMoveChange}
        className={invisible}
        value={current_move}
      />

      <button
        type="button"
        id="move_list"
        className={invisible}
        onClick={addMove}
      >
        Add Move
      </button>

      <button type="submit">Create New Opening</button>
    </form>
  )
}
export default CreateOpeningForm
