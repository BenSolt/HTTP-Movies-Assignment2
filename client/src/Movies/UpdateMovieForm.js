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
  }