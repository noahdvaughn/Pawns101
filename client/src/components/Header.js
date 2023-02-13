import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div>
          <Link to="/" className="navItem">
            Openings
          </Link>
        </div>
        <div>
          <Link to="/view-players" className="navItem">
            Players
          </Link>
        </div>
        <div>
          <Link to="/create-player" className="navItem">
            Create Player
          </Link>
        </div>
        <div>
          <Link to="/create-opening" className="navItem">
            Create Opening
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
