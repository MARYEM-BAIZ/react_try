import React from 'react';
import './personne.css';


function Personne(props) {
    return (
      <div className="Personne">
     <p onClick={props.changerunefonction} >bonjour {props.nom} , j'ai {props.age} ans</p>
     <input type="text" name="nom" onChange={props.changernom} value={props.nom}></input>
     <p onClick={props.changerunefonction} > {props.children} </p>

      </div>
    );
  }
  
  export default Personne;
  