import logo from './logo.svg';
import './App.css';
import Personne from './personne/personne';
import Contact from './contact/contact';
import About from './about/about';
import { Component } from 'react';
import Posts from './posts/posts';
import Todo from './todo/todo';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {


   state = {
     
    personnes:[
     
        {nom:"maryem",age:20},
        {nom:"soukaina",age:16}

    ] ,
    afficherpersonns : false ,

   };


    changerinfos = () => {

        // console.log("click");
         this.setState({

          personnes:[
     
            {nom:"maryem1",age:20},
            {nom:"soukaina1",age:16}
    
        ]

         })
     
    }




    toggle = () => {

    const   value = this.state.afficherpersonns ;
       this.setState({
        
        afficherpersonns   : !value 

       })
   
  }




     
    changerlenom = (event) => {
    //  console.log(event.target.value);
   
       this.setState({

        personnes:[
   
          {nom:event.target.value ,age:20},
          {nom:"soukaina1",age:16}
  
      ]

       })
   
  }



  render(){
 const btnstyle={
   
  border: "none",
  borderRadius: "7px",
  color: "white",
  backgroundColor: "palevioletred",
  padding: "15px",
  marginTop: "40px",

 }

     let personnes = null;
     if (this.state.afficherpersonns == true) {
       
        personnes=(

          <div>
     <Personne nom={this.state.personnes[0].nom} age={this.state.personnes[0].age}
     changerunefonction={this.changerinfos}
     changernom={this.changerlenom}
      />
     <Personne nom={this.state.personnes[1].nom}  age={this.state.personnes[1].age}  > c'est le début de la journée </Personne >
          </div>
        )

     }



    return (  

    
      <div className="App">
   <Router>
<header>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/todo">Todo</Link></li>
</ul>
</nav>
<Switch>

        <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/"  exact>
          <Posts/> 
          </Route>

          <Route path="/todo">
            <Todo />
          </Route>

</Switch>
</header>
</Router>


     <button style={btnstyle} onClick={this.changerinfos}> changer les informations </button>
     <button onClick={this.toggle}  style={{backgroundColor:"rgb(62, 162, 202)", padding:"15px" ,  marginTop: "40px",color: "white",borderRadius: "7px",border: "none" ,  marginLeft: "40px"}}  > toggle </button>
           {personnes}
          
      </div>
    );

  }
}

export default App;
