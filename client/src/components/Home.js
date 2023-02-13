import { useEffect, useState } from 'react'
import axios from 'axios'
import OpeningCard from './OpeningCard'

const Home = () => {
  const [openingResults, setOpeningResults] = useState([])

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get(
        'http://localhost:3001/api/all-openings'
      )
      setOpeningResults(openingResponse.data.openings)
    }
    getAllOpenings()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <div className="homeBody">
        {openingResults.map((result) => (
          <OpeningCard key={result._id} opening={result} />
        ))}
      </div>
    </div>
  )
}
export default Home
