import { useEffect, useState } from 'react'
import axios from 'axios'
import OpeningCard from './OpeningCard'

const Home = () => {
  const [openingResults, setOpeningResults] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [e4Filter, sete4Filter] = useState(false)
  const [d4Filter, setd4Filter] = useState(false)
  const [otherFilter, setOtherFilter] = useState(false)

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
    if (e4Filter === true) {
      const e4Results = openingResults.filter(
        (result) => result.move_list[0] === 'e4'
      )
      return e4Results.map((result) => (
        <OpeningCard key={result._id} opening={result} />
      ))
    } else if (d4Filter === true) {
      const d4Results = openingResults.filter(
        (result) => result.move_list[0] === 'd4'
      )
      return d4Results.map((result) => (
        <OpeningCard key={result._id} opening={result} />
      ))
    } else if (otherFilter === true) {
      const d4Results = openingResults.filter(
        (result) => result.move_list[0] != 'd4' && result.move_list[0] != 'e4'
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
  const toggleInvisible = () => {
    setShowFilter(!showFilter)
  }
  const togglee4 = () => {
    sete4Filter(!e4Filter)
  }
  const toggled4 = () => {
    setd4Filter(!d4Filter)
  }
  const toggleOther = () => {
    setOtherFilter(!otherFilter)
  }

  const FilterOptions = () => {
    if (showFilter) {
      return (
        <div className="filterButtonDiv">
          <h3 className="filterButtons" onClick={togglee4}>
            e4
          </h3>
          <h3 className="filterButtons" onClick={toggled4}>
            d4
          </h3>
          <h3 className="filterButtons" onClick={toggleOther}>
            other
          </h3>
        </div>
      )
    } else {
      return
    }
  }

  return (
    <div>
      <div className="topText">
        <h1 className="pageTitle">Openings </h1>
        <img
          className="filterIcon"
          src="https://cdn-icons-png.flaticon.com/512/6488/6488674.png"
          onClick={toggleInvisible}
        />
        <h1 className="siteLogo">Pawns ♜o♜</h1>
      </div>
      <FilterOptions />
      <div className="homeBody">
        <MoveFilter />
      </div>
    </div>
  )
}
export default Home
