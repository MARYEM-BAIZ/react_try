import React from 'react';
import logo from './logo.svg';
import './App.css';
import Personne from './Personne/Personne';

  class App extends React.Component{

      state = {
        personne: [
          {nom:"Alicennomtest"},
          {nom:"Bobnnomtest"},
          {nom:"Frednnomtest"},
          {nom:"Martinnnomtest"},
        ],
        afficherpersonnes : false
      }

      changestate = () => {
        this.setState({ personne: [
          {nom:"zvennomtest"},
          {nom:"martinnnomtest"}
        ]})
      }

      changename = (event) => {
        this.setState({ personne: [
          {nom:event.target.value},
          {nom:"martinnnomtest"},
          {nom:"Bobnnomtest"},
          {nom:"Frednnomtest"},
        ]})
      }

      changedisplay = () => {
        const etatdisplay = this.state.afficherpersonnes;
        this.setState({
          afficherpersonnes : !etatdisplay
        })
      }

      removeItem = (index) => {
        const new_personnes = this.state.personne;
        new_personnes.splice(index,1);
        this.setState({
          personne:new_personnes
        })
      }
        

    render(){

      let personnes = null;
      if(this.state.afficherpersonnes === true){
          personnes = (
            <div>
              {
                this.state.personne.map( ( item, index) => {
                  return(
                    <Personne 
                    key = { index }
                    supprimer={ () =>{ this.removeItem(index)} } 
                    passFunction={this.changestate} 
                    changerNom={this.changename}  
                    nom={item.nom} />
                  )
                })
              }
            </div>
          )
      }

        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React HELOO DAZAI
              </a>
              { personnes }

              <button onClick={this.changedisplay}>change state</button>
            </header>
          </div>
        );
      }
    }
  

  

export default App;
