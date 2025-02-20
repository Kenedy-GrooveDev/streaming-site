import { Link } from "react-router-dom";
import '../css/Navbar.css';

export default function NavBar() {
  const image = {
    url: '/flixco-logo.png', // Ensure correct image path
    width: 100,
    height: 100
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to='/'>
            <img src={image.url} alt="Flixco Logo" style={{ width: image.width, height: image.height }} />
            <span>Flixco</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/favorites' className="nav-link">Favorites</Link>
        </div>
      </nav>
    </>
  )
}
