
import './posts.css';
import Post from './post/post';
import { Component } from 'react';
import Axios from 'axios';


class Posts extends Component {


   constructor(props){
       super(props);

       this.state ={
     
          posts:[]

       }

   }



  componentDidMount()
{
  
    Axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(response => {
           // console.log(response);
           let posts=response.data;
           let new_post=posts.slice(0,5);

           this.setState({
  
              posts:new_post

           });
         
       })
       .catch(error=> {
        console.log(error);
    });

}
   



poster = () => {
   
    const post={
      
        userId:1,
        title:"titre1",
        body:"text text text text text"
    };

     
    Axios.post("https://jsonplaceholder.typicode.com/posts",post)
    .then(response => {
         console.log(response);
      
    })
    .catch(error=> {
     console.log(error);
 });

         

   
  }



  supprimer = () => {
   
     
    Axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
         console.log(response);
      
    })
    .catch(error=> {
     console.log(error);
 });

         

   
  }





  render(){
      
    const posts= this.state.posts.map( (post)=> {
  
              return(

                <Post

                 key={post.id}
                 titre={post.title}
                 contenu={post.body}

                />

              )
        
  } );
  
   




    return (  
        <div className="Posts">
       <button onClick={this.poster}>ajouter post</button>
       <button onClick={this.supprimer}>supprimer le post ajouter</button>
             {posts}
             
        </div>
      )  
 }

    



}

export default Posts;
