import { useEffect, useState } from 'react'
import axios from 'axios'
import OpeningCard from './OpeningCard'

const Home = () => {
  const [openingResults, setOpeningResults] = useState([])
  const [e4Filter, sete4Filter] = useState('False')
  const [d4Filter, setd4Filter] = useState('False')

  useEffect(() => {
    const getAllOpenings = async () => {
      const openingResponse = await axios.get(
        'http://localhost:3001/api/all-openings'
      )
      setOpeningResults(openingResponse.data.openings)
    }
    getAllOpenings()
  }, [])

  const MoveFilter = () => {
    if (e4Filter === 'True') {
      const e4Results = openingResults.filter(
        (result) => result.move_list[0] === 'e4'
      )
      return e4Results.map((result) => (
        <OpeningCard key={result._id} opening={result} />
      ))
    } else if (d4Filter === 'True') {
      const d4Results = openingResults.filter(
        (result) => result.move_list[0] === 'd4'
      )
      return d4Results.map((result) => (
        <OpeningCard key={result._id} opening={result} />
      ))
    } else {
      return openingResults.map((result) => (
        <OpeningCard key={result._id} opening={result} />
      ))
    }
  }

  return (
    <div>
      <div className="topText">
        <h1 className="pageTitle">Openings </h1>
        <img
          classname="filterIcon"
          src="https://cdn-icons-png.flaticon.com/512/6488/6488674.png"
        />
        <h1 className="siteLogo">Pawns ♜o♜</h1>
      </div>
      <div className="homeBody">
        <MoveFilter />
      </div>
      <button>Filter</button>
    </div>
  )
}
export default Home
