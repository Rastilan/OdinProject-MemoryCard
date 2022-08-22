// Simple function that contains the onclick and imgurl value
import React from 'react';
function Card(props) {

    return (
      <button 
      className = 'card'
      onClick={props.onClick}
      >
        <img src={props.imgURL} alt="card"/>
        
      </button>
    );
  }

  export default Card;