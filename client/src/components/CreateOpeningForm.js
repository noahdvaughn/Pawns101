import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateOpeningForm = () => {
  let navigate = useNavigate()

  const [invisible, setInvisible] = useState('')
  const [current_move, setCurrentMove] = useState('')
  const initialState = {
    name: '',
    master_win: '',
    master_lose: '',
    master_draw: '',
    move_list: [],
    opening_url: ''
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
    await navigate('/')
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
  const ValidButton = () => {
    if (formState.name && formState.move_list[0]) {
      return <button type="submit">Create New Opening</button>
    } else {
      return (
        <button type="button" disabled>
          Name and move 1 are required
        </button>
      )
    }
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
      <label htmlFor="opening_url">Add Image URL:</label>
      <input
        id="opening_url"
        type="text"
        onChange={handleChange}
        value={formState.opening_url}
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
      {formState.move_list.map((move) => (
        <div key={move}>Move:{move}</div>
      ))}
      <ValidButton />
    </form>
  )
}
export default CreateOpeningForm
