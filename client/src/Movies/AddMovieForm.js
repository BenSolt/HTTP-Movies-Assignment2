import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    id: Date.now(),
    title: '',
    director: '',
    metascore: '',
    stars: [],
  }

  const AddMovieForm = props => {
      const [movie, setMovie] = useState(initialMovie);
      const handleChange = e => {
          e.persist()
          let value = e.target.value;
      
      setMovie({
          ...movie,
          [e.target.name]: value
      })
    }

//   useEffect(()=> {
//       axios
//       .get(`http://localhost:5000/api/movies`)
//       .then(res => setMovie(res.data))
//       .catch(err => console.log(err.repsponse))
//       console.log(props.match.params.id)
//   }, [props.match.params.id])

  const addMovie = e => {
      e.preventDefault();
      console.log(movie)
      axios.post(`http://localhost:5000/api/movies`, movie)
      .then (res => {
          //props. (res.data)
          props.history.push('/')
      })
      .catch(err => console.log(err))
   }

   return(
       <div className='centerform'>
           <div className='formholder'>
           <h2>Add Movie</h2>
           <form className='form' onSubmit={addMovie}>
            <input
            className='input'
               type="text"
               name= "title"
               placeholder="title"
               onChange={handleChange}
               value={movie.title}
            />
             <input
            className='input'
            type="text"
            name= "director"
            placeholder="director"
            onChange={handleChange}
            value={movie.director}
            />
            <input
            className='input'
            type="number"
            name= "metascore"
            placeholder="metascore"
            onChange={handleChange}
            value={movie.metascore}
            />
            
            <button className="btn">Add Movie</button>

           </form>
           </div>
       </div>
   )


}
export default AddMovieForm;
