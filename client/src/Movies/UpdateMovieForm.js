import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    // id: Date.now(),
    title: '',
    director: '',
    metascore: '',
    // stars: [],
  }

  const UpdateMovieForm = props => {
      const movie, setMovie = useState(initialMovie);
      const changeHandler = e => {
          e.persist()
          let value = e.target.value;
      }
      setMovie({
          ...movie,
          [e.target.name]: value
      })
  

  useEffect(()=> {
      axios
      .get(`http://localhost:5000/api/movies`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.repsponse))
      console.log(props.match.params.id)
  }, [props.match.params.id])

  const handleSubmit = e => {
      e.preventDefault();
      console.log(movie)
      axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then (res => {
          //props. (res.data)
          props.history.push('/')
      })
      .catch(err => console.log(err))
   }

   return(
       <div>
           <h2>Update Movie</h2>
           <form onSubmit={handleSubmit}>
            <input
               type="text"
               name= "title"
               placeholder="title"
               onChange={changeHandler}
               value={movie.title}
            />
             <input
               type="text"
               name= "director"
               placeholder="director"
               onChange={changeHandler}
               value={movie.director}
            />
            <input
               type="number"
               name= "metascore"
               placeholder="metascore"
               onChange={changeHandler}
               value={movie.metascore}
            />
            
            <button className='btnupdate'>Update Movie</button>

           </form>
       </div>
   )
};

export default UpdateMovieForm;
