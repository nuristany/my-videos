import React from 'react';
import './App.css';
import * as fakeMovieService from './fakeMovieService';
import  { useState } from 'react';

function App() {
  
  const [movies, setMovies] = useState(fakeMovieService.getMovies());
  
  const handleDelete = (movie) =>{
    const newMovie = movies.filter(m => m._id !== movie._id)
    setMovies(newMovie)
  }
  const movieList = movies.map(movie => (
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <button onClick={() => handleDelete(movie)} className='btn btn-danger'>Delete</button>
      </td>
      <td>
        <img src={movie.image} className='movie-image' alt='movies' />
      </td>
    </tr>

  ))


  return (

    <div className='main'>

    {movies.length === 0 ?<p>No movies available.</p> : <p>Showing {movies.length} movies in the database</p>}
    

    <div className="Table mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>

        <tbody>
          {movieList}
        </tbody>
          
      </table>
    </div>
    </div>
  );
}

export default App;




    
    
