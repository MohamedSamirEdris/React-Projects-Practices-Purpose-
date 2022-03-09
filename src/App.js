import { useEffect , useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//59a07fb4

const API_URL = 'http://www/amdbpi.com?apikey=59a07fb4'


const App= () =>  {
  const [movies , setMovies] = useState([])
  const [searchTerm , setSearchTerm] = useState('')

  const searchMovie  = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
  
    setMovies(data.Search)
  }
  
  useEffect(() => {
    searchMovie('Spiderman')
  },[])

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
        placeholder="search for movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 
        ? (
          <div className="container">
            {movies.map((movie) => {
               <MovieCard movie={movie} />
            })}
        </div>
        ) :
        (
          <div className="emty">
            <h2>Movies not found</h2>
          </div>
        )
      }
     
    </div>
  );
}

export default App;
