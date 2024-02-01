import React from 'react';
import './movieContent.css'
import logo from '../images/Attack_on_Titans_logo.jpg'


function MovieContent() {
  return (
    <div className="content active">
      <img src={logo} alt="Movie TItle" className="movie-title" />
      <h4><span>Year</span>
      <span><i>Age</i></span>
      <span>Length</span>
      <span>Category</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eveniet id vel placeat, sequi beatae facilis nam optio 
        neque fuga, illum voluptates tempora asperiores corporis? 
        Enim, quo totam. Nesciunt, quisquam animi!
      </p>
      <div className="button">Button</div>
    </div>
  )
}

export default MovieContent
