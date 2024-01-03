import {useState} from 'react'
import {Link} from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import './index.css'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearch = event => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }

  return (
    <nav className="nav-container">
      <h1>
        <Link className="nav-heading" to="/">
          movieDB
        </Link>
      </h1>
      <ul className="nav-items-list">
        <Link to="/" className="nav-link">
          <li>Popular</li>
        </Link>
        <Link to="/top-rated" className="nav-link">
          <li>Top Rated</li>
        </Link>
        <Link to="/upcoming" className="nav-link">
          <li>Upcoming</li>
        </Link>
      </ul>
      <div className="search-container">
        <input type="search" className="search-box" onChange={onChangeSearch} />
        <Link to={`/movies/${searchValue}`}>
          <CiSearch className="search-icon" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
