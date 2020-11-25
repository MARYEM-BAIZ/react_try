import React from 'react';
import './post.css';


function Post(props) {
    return (
      <div className="Post">
     
        <h2>{props.titre}</h2>
        <p>{props.contenu}</p>
       
      </div>
    );
  }
  
  export default Post;
  