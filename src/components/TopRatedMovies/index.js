import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MovieItems from '../MovieItems'

import './index.css'

class TopRatedMovies extends Component {
  state = {popularMoviesList: [], isLoading: true}

  componentDidMount() {
    this.renderPopularApiCall()
  }

  renderPopularApiCall = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=a617ee14d0c2ccbb49b97c8632c8110a&language=en-US&page=1'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({popularMoviesList: data.results, isLoading: false})
    console.log(data.results)
  }

  render() {
    const {popularMoviesList, isLoading} = this.state
    console.log(popularMoviesList)
    return (
      <ul className="popular-list">
        {popularMoviesList.map(eachMovie => (
          <MovieItems key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </ul>
    )
  }
}

export default TopRatedMovies
