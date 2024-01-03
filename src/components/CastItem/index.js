import './index.css'

const CastItem = props => {
  const {castDetails} = props
  const {original_name, character, profile_path} = castDetails
  return (
    <li className="cast-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={original_name}
        className="cast-image"
      />
      <p className="name-1">{original_name}</p>
      <p className="name-2">{character}</p>
    </li>
  )
}

export default CastItem
