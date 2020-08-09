import React, { Component } from 'react';
import '../App.css';

class StudentLogin extends Component {
  constructor() {
	  super();
	  console.log('Calling Constructor');
	 // String email = 'ss@gmail.com';
	 this.state = {
		studentId: null,
		studentName: null,
     }
	 
  }
  handleChangeStudentId(event) {
    this.setState({studentId: event.target.value});
  }
  handleChangeStudentName(event){
	  
	  this.setState({studentName:event.target.value});
  }
  
  
 login()
 {
	 
	var alertMessage = "Hi " + this.state.studentName + " Your Student ID Is " + this.state.studentId;
	 alert(alertMessage);
	 //window.location.ref
 }

  render(){
	  return( 
	   <div className="App">
	  
	  <h1>STUDENT LOGIN PAGE</h1>
	  <form >
<label>STUDENT ID</label>
<input type="text"  onChange={(event) => this.handleChangeStudentId(event)} />
<label>STUDENT NAME</label>
<input type="text" onChange={(event)=> this.handleChangeStudentName(event)}/>
<button onClick={()=>this.login()}>login</button>
</form>
<div> {this.state.studentId}</div>
	  </div>
	  )
	 
	 
  }
}
export default StudentLogin 