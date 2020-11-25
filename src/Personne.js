import React from 'react';
import './Personne.css'


function Personne(props){
    return (
        <div className="Personne">
            <h1 onClick={props.supprimer}>WELCOME TO REACT {props.nom}</h1>
            <input onChange={props.changerNom} type="text" />
    <h2>{props.children}</h2>
        </div>
    )
}




export default Personne;
