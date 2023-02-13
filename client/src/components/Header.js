import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div>
        <Link to="/" className="navItem">
          <h3>Openings</h3>
        </Link>
      </div>
      <div>
        <Link to="/view-players" className="navItem">
          <h3>Players</h3>
        </Link>
      </div>
      <div>
        <Link to="/create-player" className="navItem">
          <h3>Create Player</h3>
        </Link>
      </div>
      <div>
        <Link to="/create-opening" className="navItem">
          <h3>Create Opening</h3>
        </Link>
      </div>
    </header>
  )
}

export default Header
