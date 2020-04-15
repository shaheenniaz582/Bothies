import React, {Component} from 'react';
import Request from '../helpers/Request';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: null,
      selectedUser: []
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.openForm=this.openForm.bind(this);
    this.closeForm=this.closeForm.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/users')
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
    event.preventDefault();
    if(event.target.email.value === this.state.user[0].email && event.target.psw.value === this.state.user[0].password){
      // this.setState({user: this.state.selectedUser});
      this.props.userLoggedIn(this.state.user[0])
      document.getElementById("commentBox").style.opacity = 1;
      document.getElementById("commentBox").style.pointerEvents = "auto";
      document.getElementById("loginForm").style.display = "none";
    } else{
      console.log("Wrong login");
    }
  }


  render(){
    return(

      <div>
      <button className="open-button" onClick={this.openForm}>Open Form</button>

      <div className="form-popup" id="loginForm">

      <form onSubmit={this.handleSubmit} className="form-container">
      <h1>Login</h1>

      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required/>

      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>

      <button type="submit" className="btn">Login</button>
      <button type="submit" className="btn cancel" onClick={this.closeForm}>Close</button>
      </form>
      </div>
      </div>



    )
  }



}

export default LoginContainer;
