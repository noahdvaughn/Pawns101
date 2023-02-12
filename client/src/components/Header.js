import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="navItem">
          <Link to="/">Openings</Link>
        </div>
        <div className="navItem">
          <Link to="/view-players">Players</Link>
        </div>
        <div className="navItem">
          <Link to="/create-player">Create Player</Link>
        </div>
        <div className="navItem">
          <Link to="/create-opening">Create Opening</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
