import './App.css'
import MovieList from './components/MovieList'

function App() {
  const movies = [
    "The Matrix",
    "Man of Steel",
    "Lord of the Rings",
    "Chase of Christ"
  ]

  return <MovieList movies={movies} title="My movies"/>
  
}

export default App
