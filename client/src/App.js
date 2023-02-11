import './App.css'
import { Routes, Route } from 'react-router-dom'
import CreateOpeningForm from './components/CreateOpeningForm'
import CreatePlayerForm from './components/CreatePlayerForm'
import EditPlayerForm from './components/EditPlayerForm'
import EditOpeningForm from './components/EditOpeningForm'
import Home from './components/Home'
import Header from './components/Header'
import OpeningDetails from './components/OpeningDetails'
import ViewPlayers from './components/ViewPlayers'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="opening-details/:id" element={<OpeningDetails />} />
        <Route path="/view-players" element={<ViewPlayers />} />
        <Route path="/create-opening" element={<CreateOpeningForm />} />
        <Route path="/create-player" element={<CreatePlayerForm />} />
        <Route path="/edit-player/:id" element={<EditPlayerForm />} />
        <Route path="/edit-opening/:id" element={<EditOpeningForm />} />
      </Routes>
    </div>
  )
}

export default App
