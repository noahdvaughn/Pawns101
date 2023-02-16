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
    await axios.post('/api/create-opening', formState)
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
          Create New Opening
        </button>
      )
    } else {
      return <h3>Name and Move 1 are required</h3>
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="pageTitle">Create Opening</h1>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={formState.name}
        />
        {/* <label htmlFor="master_win">Win percent:</label> */}
        <input
          placeholder="Win Percent"
          id="master_win"
          type="text"
          onChange={handleChange}
          value={formState.master_win}
        />
        {/* <label htmlFor="master_lose">Lose percent:</label> */}
        <input
          placeholder="Lose Percent"
          id="master_lose"
          type="text"
          onChange={handleChange}
          value={formState.master_lose}
        />
        {/* <label htmlFor="master_draw">Draw percent:</label> */}
        <input
          placeholder="Draw Percent"
          id="master_draw"
          type="text"
          onChange={handleChange}
          value={formState.master_draw}
        />
        {/* <label htmlFor="opening_url">Add Image URL:</label> */}
        <input
          placeholder="Opening URL"
          id="opening_url"
          type="text"
          onChange={handleChange}
          value={formState.opening_url}
        />
        {/* <label htmlFor="move_list" className={invisible}>
          Move {movenum}
        </label> */}
        <input
          placeholder={`Move ${movenum}`}
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
            + Add Move
          </button>

          <button
            type="button"
            id="move_list"
            className={movenum === 1 ? 'invisible' : ''}
            onClick={deleteMove}
          >
            - Delete Move
          </button>
        </div>
        {formState.move_list.map((move) => (
          <h3 key={move}>{move}</h3>
        ))}
        <ValidButton />
      </form>
      <iframe src="https://lichess.org/tv/frame?theme=green&bg=dark"></iframe>
    </div>
  )
}
export default CreateOpeningForm
