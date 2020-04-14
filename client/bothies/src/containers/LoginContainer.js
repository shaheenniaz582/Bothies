import React, {Component} from 'react';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: []
    };
    this.handleLogIn=this.handleSubmit.bind(this);
    this.openForm=this.openForm.bind(this);
    this.closeForm=this.closeForm.bind(this);
  }

    openForm() {
    document.getElementById("loginForm").style.display = "block";
  }

    closeForm() {
    document.getElementById("loginForm").style.display = "none";
  }

  handleSubmit(){
    //match details with user in db and if they correspond push that user to this.state.user
  }


  render(){
    return(

      <div>
      <button class="open-button" onClick={this.openForm}>Open Form</button>

      <div class="form-popup" id="loginForm">

      <form onSubmit={this.handleSubmit} class="form-container">
      <h1>Login</h1>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>

      <button type="submit" class="btn">Login</button>
      <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
      </form>
      </div>
      </div>



    )
  }



}

export default LoginContainer;
