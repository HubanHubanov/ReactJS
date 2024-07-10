import './App.css'
import {useState} from "react"

// const movies = [
//   "The Matrix",
//   "Man of Steel",
//   "The Lord of the rings"
// ]


function App() {
const [movies, setMovies] = useState([
    "The Matrix",
    "Man of Steel",
    "The Case for Christ",
    "The Lord of the rings"
  ]);

  const buttonClickHandler = () => {
    setMovies((oldMovies) => {
        // const newMovies = oldMovies.slice();
        const newMovies = [...oldMovies];
        newMovies[3] = "Harry Potter";
        newMovies.push("Avengers");
        newMovies.shift();
        return newMovies;
    })
  }


  return (
    <>
        <h1>Movies</h1>

        {/* <ul>
            <li>{movies[0]}</li>
            <li>{movies[1]}</li>
            <li>{movies[2]}</li>
        </ul> */}

        {/* <ul>
            {[
                <li>The Matrix</li>,
                <li>Man of Stee</li>,
                <li>The Lord of the rings</li>

            ]}
        </ul> */}

         <ul>
            {movies.map((movie) =><li key={movie}>{movie}</li>)}
        </ul> 

  
  <button onClick={buttonClickHandler}>Change</button>
    </>
  )
}

export default App
