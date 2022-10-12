import React, { Component } from 'react';
class App extends Component{

   constructor(probs)
    {
        super(probs);
        this.state={name:"AAAA"}
    }

    
   changeValue=()=>
   {
    alert("console");
    this.setState({name:"Welcome"})
   }

   render(){
       return(
      <div>
        <h1>{this.state.name}</h1><br/>
        <button type='button' onClick = {()=>this.changeValue()}>Change Name</button>  
        </div>);
   }
}
export default App;