import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreatePlayerForm = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    nationality: '',
    elo: '',
    age: '',
    profile_url: '',
    bio: '',
    favorite_opening: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [openingResults, setOpeningResults] = useState([])

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get('/api/all-openings')
      setOpeningResults(openingResponse.data.openings)
    }
    getAllOpenings()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('/api/create-player', formState)
    setFormState(initialState)
    await navigate('/view-players')
  }

  function ValidButton() {
    if (formState.name && formState.nationality && formState.age) {
      return (
        <button type="submit" className="validButton">
          Create New Player
        </button>
      )
    } else {
      return <h3>Name, Nationality, and Age are required</h3>
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="pageTitle">Create Player</h1>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          placeholder="Name"
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        {/* <label htmlFor="nationality">Nationality:</label> */}
        <input
          placeholder="Nationality"
          id="nationality"
          type="text"
          onChange={handleChange}
          value={formState.nationality}
        />
        {/* <label htmlFor="elo">Elo:</label> */}
        <input
          placeholder="Elo"
          id="elo"
          type="text"
          onChange={handleChange}
          value={formState.elo}
        />
        {/* <label htmlFor="age">Age:</label> */}
        <input
          placeholder="Age"
          id="age"
          type="text"
          onChange={handleChange}
          value={formState.age}
        />
        {/* <label htmlFor="profile_url">Profile Picture URL:</label> */}
        <input
          placeholder="Profile Picture URL"
          id="profile_url"
          type="text"
          onChange={handleChange}
          value={formState.profile_url}
        />
        {/* <label htmlFor="bio">Bio:</label> */}
        <input
          placeholder="Bio"
          id="bio"
          type="text"
          onChange={handleChange}
          value={formState.bio}
        />
        <label htmlFor="favorite_opening">Favorite Opening</label>

        <select
          id="favorite_opening"
          type="object"
          onChange={handleChange}
          value={formState.favorite_opening}
        >
          {openingResults.map((result) => (
            <option key={result._id}>{result.name}</option>
          ))}
        </select>

        <ValidButton />
      </form>
      <iframe src="https://lichess.org/tv/frame?theme=green&bg=dark"></iframe>
    </div>
  )
}
export default CreatePlayerForm
