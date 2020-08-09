import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
	  super();
	  console.log('Calling Constructor');
	 // String email = 'ss@gmail.com';
	 this.state = {
		 
     }
  }
   myFunction(){
	   window.location.href="/student";
   }
   myFunction1(){
	   alert("staff login page");
   }

 render() {
	console.log('Calliing Render'); 
   return (
    <div className="App">
      <h1 > Welcome </h1>
	   <button onClick={()=>this.myFunction()}> student Login </button>
	   <button onClick={()=>this.myFunction1()}>Staff Login</button>
    </div>
   );
  }
}

export default App;
