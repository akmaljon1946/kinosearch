import React from "react";
import axios from 'axios';
import Movie from "./Components/Movie";

class Api extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovie = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount () {
    this.getMovie();
  }

  render () {
    const { isLoading, movies } = this.state;
    return (
      <div>{ isLoading ? "Загрузка..." : movies.map(movie => {
        console.log(movie);

        return (
          <div>
            <Movie
              key={ movie.id }
              Id={ movie.Id }
              year={ movie.year }
              title={ movie.title }
              poster={ movie.large_cover_image }
              summary={ movie.summary }
              rating={ movie.rating }
            />
          </div>
        );
      }) }</div>

    );

  }
}

export default Api;