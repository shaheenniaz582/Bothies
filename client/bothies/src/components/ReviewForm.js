import React, {Component} from 'react';

class ReviewForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      visitorFirstName: "",
      visitorLastName: "",
      comments:"",
      rating:0
    }; //ends state
    this.handleVisitorFirstNameChange = this.handleVisitorFirstNameChange.bind(this);
    this.handleVisitorLastNameChange = this.handleVisitorLastNameChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //ends constructor

  handleVisitorFirstNameChange(event){
    this.setState({visitorFirstName: event.target.value});
  }


 handleVisitorLastNameChange(event){
   this.setState({visitorLasttName:event.target.value});
 }

handleCommentsChange(event){
  this.setState({comments:event.target.value});
}

handleRatingChange(event){
  this.setState({rating:event.target.value});
}




    handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state);
  }


  render() {

  return(
    <form>
    <div className="form_review">
    <label htmlFor="firstName"> First Name:</label>
    <input
      onChange={this.handleVisitorFirstNameChange}
      name="visitorFirstName"
      id="visitorFirstName"
      type="text"
      value={this.state.visitorFirstName} />
    </div>

    <div className="form_review">
    <label htmlFor="lasttName"> Last Name:</label>
    <input
      onChange={this.handleVisitorLastNameChange}
      name="visitorLasttName"
      id="visitorLasttName"
      type="text"
      value={this.state.visitorLastName} />
    </div>



    <div className="form_review">
    <label htmlFor="comments"> Comments:</label>
    <input
      onChange={this.handleCommentsChange}
      name="comments"
      id="comments"
      type="text"
      value={this.state.comments} />
    </div>

    <div className="form_review">
    <label htmlFor="ratings"> Rating:</label>
    <input
      onChange={this.handleRatingChange}
      name="rating"
      id="rating"
      type="Number"
      value={this.state.rating} />
    </div>

    <input onClick={this.handleSubmit} type = "submit" value= "submit" />

    </form>
  ) //ends return
}//ends rende
} //ends class

export default ReviewForm;
