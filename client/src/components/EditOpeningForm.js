import { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const EditOpeningForm = () => {
  let navigate = useNavigate()
  const location = useLocation()
  const { opening } = location.state
  const [invisible, setInvisible] = useState('')
  const [current_move, setCurrentMove] = useState('')
  const initialState = {
    name: opening.name,
    master_win: opening.master_win,
    master_lose: opening.master_lose,
    master_draw: opening.master_draw,
    move_list: opening.move_list,
    opening_url: opening.opening_url
  }
  const [formState, setFormState] = useState(initialState)
  const [movenum, setMovenum] = useState(opening.move_list.length + 1)
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
    await axios.put(
      `http://localhost:3001/api/edit-opening/${opening._id}`,
      formState
    )
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
    }
  }
  const deleteMove = (e) => {
    e.preventDefault()
    formState.move_list.pop()
    setMovenum(movenum - 1)
    setCurrentMove('')
  }

  const ValidButton = () => {
    if (formState.name && formState.move_list[0]) {
      return (
        <button type="submit" className="validButton">
          Confirm Opening
        </button>
      )
    } else {
      return <h4>(Name and move 1 are required)</h4>
    }
  }
  const deleteOpening = async () => {
    await axios.delete(
      `http://localhost:3001/api/delete-opening/${opening._id}`
    )
    await navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="editForm">
      <h1>Edit Opening</h1>
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

      <div className="buttonDiv">
        <button
          type="button"
          id="move_list"
          className={invisible}
          onClick={addMove}
        >
          Add Move
        </button>
        <button
          type="button"
          id="move_list"
          className={movenum === 1 ? 'invisible' : ''}
          onClick={deleteMove}
        >
          Delete Last Move
        </button>
      </div>

      {formState.move_list.map((move) => (
        <h3 key={move}>{move}</h3>
      ))}
      <ValidButton />
      <button onClick={deleteOpening}>Delete Opening?</button>
    </form>
  )
}

export default EditOpeningForm
