import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="navItem">
          <Link to="/">Home</Link>
        </div>
        <div className="navItem">
          <Link to="/view-players">View Players</Link>
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
