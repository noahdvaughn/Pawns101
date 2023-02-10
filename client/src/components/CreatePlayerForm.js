import { useEffect, useState } from 'react'
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
  const [openingResults, setOpeningResults] = useState([])

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get(
        'http://localhost:3001/api/all-openings'
      )
      console.log(openingResponse.data.openings)
      console.log('working')
      setOpeningResults(openingResponse.data.openings)
    }
    getAllOpenings()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/create-player', formState)
    setFormState(initialState)
  }

  function ValidButton() {
    if (formState.name && formState.nationality && formState.age) {
      return <button type="submit">Create New Player</button>
    } else {
      return (
        <button type="button" disabled>
          Name, Nationality, and Age are required
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
        {openingResults.map((result) => (
          <option key={result._id}>{result.name}</option>
        ))}
      </select>

      <ValidButton />
    </form>
  )
}
export default CreatePlayerForm
