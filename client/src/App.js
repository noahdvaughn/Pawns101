import './App.css'
import { Routes, Route } from 'react-router-dom'
import CreateOpeningForm from './components/CreateOpeningForm'
import CreatePlayerForm from './components/CreatePlayerForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create-opening" element={<CreateOpeningForm />} />
        <Route path="/create-player" element={<CreatePlayerForm />} />
      </Routes>
    </div>
  )
}

export default App
