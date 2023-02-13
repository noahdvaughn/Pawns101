import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="navEntity">
        <Link to="/" className="navItem">
          <img
            className="navIcon"
            src="https://static.thenounproject.com/png/2275823-200.png"
            alt="pawnicon"
          />
          <h3>Openings</h3>
        </Link>
      </div>
      <div>
        <Link to="/view-players" className="navItem">
          <img
            className="navIcon"
            src="https://www.freeiconspng.com/thumbs/chess-icon/chess-icon-7.png"
            alt="knighticon"
          />
          <h3>Players</h3>
        </Link>
      </div>
      <div>
        <Link to="/create-player" className="navItem">
          <img
            className="navIcon"
            src="https://img.freepik.com/free-icon/queen_318-486655.jpg"
            alt="queenicon"
          />
          <h3>New </h3>
          <h3> &#160;</h3>

          <h3> Player</h3>
        </Link>
      </div>
      <div>
        <Link to="/create-opening" className="navItem">
          <img
            className="navIcon"
            src="https://cdn1.iconfinder.com/data/icons/strategy-and-management-outline-set/64/strategy_management_chess_piece_tower_castle_wall-512.png"
            alt="rookicon"
          />
          <h3>New </h3>
          <h3> &#160;</h3>
          <h3>Opening</h3>
        </Link>
      </div>
      <div className="socialIcons">
        <Link to="https://github.com/noahdvaughn" className="navItem">
          <img
            className="navIcon"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="githubicon"
          />
          <h3>Github</h3>
        </Link>
        <Link to="https://www.linkedin.com/in/noahvaughn/" className="navItem">
          <img
            className="navIcon"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            alt="linkedinicon"
          />
          <h3>Linkedin</h3>
        </Link>
      </div>
    </header>
  )
}

export default Header
