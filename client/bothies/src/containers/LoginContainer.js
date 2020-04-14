import React, {Component} from 'react';
import Request from '../helpers/Request';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: null,
      selectedUser: []
    };
    this.handleLogIn=this.handleSubmit.bind(this);
    this.openForm=this.openForm.bind(this);
    this.closeForm=this.closeForm.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/users')
    .then((data) => {
      this.setState({
        user: data
      })
    })
  }

    openForm() {
    document.getElementById("loginForm").style.display = "block";
  }

    closeForm() {
    document.getElementById("loginForm").style.display = "none";
  }

  handleSubmit(event){
    if(event.email && event.password === this.state.user.username && this.state.user.password){
      //let them in
    } else{
      //details are wrong
    }
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
