
import './todo.css';

import { Component } from 'react';



class Todo extends Component {


    constructor(props){
        super(props);
 
        this.state ={
      
           taches:[
               { id:1,tache:"sport"}
           ],
           tache:"",
           old_index: null
 
        }
 
    }



    inputhandler  = (event) => {
   
    const  tache = event.target.value ;

    this.setState({

        tache:tache

       });
    
        }


        ajouter  = (event) => {
              event.preventDefault()
           const todos= this.state.taches ;
           const todo = todos[todos.length - 1] ;

           if (this.state.old_index == null) {
            const new_todo ={ id:todo.id + 1,tache:this.state.tache };
            todos.push(new_todo);
 
 
            this.setState({
             taches:todos
                  
            });

           } else{

                const tache=todos[this.state.old_index] ;
                 tache.tache= this.state.tache;
                 todos[this.state.old_index]=tache;

                 this.setState({
                  taches:todos,
                  old_index:null
                       
                 });


           }
            
                }



                removeItem = (id) => {
                    const tache_deleted = this.state.taches;
                    tache_deleted.splice(id-1,1);
                    this.setState({
                      taches:tache_deleted
                    })
                  }


                  modifier = (id) => {
                    const tache = this.state.taches;
                      // recuperation de l'index de la tache a modifier 
                    let indexindex= tache.findIndex( (item ) => {
                        return item.id  == id ; 
                    });
                       const tachemodi  = tache[indexindex];

                    this.setState({
                      
                      tache:tachemodi.tache,
                      old_index:indexindex
                    });
                   

                  }


  render(){
 
    return (  

        <div className="Todo">


         <form >
 
           <label > tache</label>
             <input type="text" name="tache" onChange={this.inputhandler}  value={this.state.tache}></input>

            <input type="submit" value="ajouter" onClick={this.ajouter}></input>
            </form>



            <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">tache</th>
      <th scope="col">modifier</th>
      <th  scope="col">supprimer</th>
    </tr>
  </thead>
  <tbody>

  
    
    {

     this.state.taches.map( (tache, index) => {
  
      return (
        <tr key={tache.id}>
        <th scope="row">{tache.id}</th>
        <td>{tache.tache}</td>
        <td><button onClick={ () =>{ this.modifier(tache.id)}} className="btn btn-primary">modifier</button></td>
        <td><button onClick={ () =>{ this.removeItem(tache.id)}} className="btn btn-danger">supprimer</button></td>
      </tr>  
      )


    }) 

    }
   
   
  </tbody>
</table>
           
 
         
         
         </div>
   
        )
     }



   

  }


export default Todo;
