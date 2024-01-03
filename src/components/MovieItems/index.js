import {Link} from 'react-router-dom'
import './index.css'

const MovieItems = props => {
  const {movieDetails} = props
  const {id, title, vote_average, poster_path} = movieDetails

  return (
    <li className="list-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="poster-image"
      />
      <h1 className="title-heading">{title}</h1>
      <p className="rating">Rating {vote_average}</p>
      <Link to={`/movie/${id}`}>
        <button className="details-button">View Details</button>
      </Link>
    </li>
  )
}

export default MovieItems
