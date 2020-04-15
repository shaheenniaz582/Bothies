import React, { Component } from 'react';
import Request from '../../helpers/Request.js'

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
      trailId: '',
      rating: 0
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   handlePost(review){
//     debugger
//   //   review["id"] = this.props.trailId;
//   //   const request = new Request();
//   //   request.post('/reviews', review).then(() => {
//   //     window.location = '/map'
//   // })
// }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleRatingChange(event){
    this.setState({rating:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const author = this.props.user.username.trim();
    const text = this.state.text.trim();
    const rating = this.state.rating;

    // error handling: do not submit if either field is empty
    if (!text || !author || !rating) {
      return;
    }

    const review = {
      author: author,
      text: text,
      rating: rating,
      trailId: this.props.trailId
    };
    const request = new Request();
    request.post('/reviews', review).then(() => {
      // window.location = '/map'
    })

    // update the list of comments in CommentBox
    this.props.onCommentSubmit(review);

    // reset the form to empty values
    this.setState({
      author: '',
      text: '',
      rating: 0
    })
  }

  render() {
    return (
      console.log(this.state.rating),
      <form className="comment-form" onSubmit={ this.handleSubmit }>

      <input type="text"
      placeholder="Say something..."
      value={this.state.text}
      onChange={this.handleTextChange} />

      <fieldset className="rating">
      <legend>Please Rate</legend>
      <input type="radio" id="star5" name="rating" value="5" onChange={this.handleRatingChange}/><label htmlFor="star5" title="Very Good"></label>
      <input type="radio" id="star4" name="rating" value="4" onChange={this.handleRatingChange}/><label htmlFor="star4" title="Good"></label>
      <input type="radio" id="star3" name="rating" value="3" onChange={this.handleRatingChange}/><label htmlFor="star3" title="Average"></label>
      <input type="radio" id="star2" name="rating" value="2" onChange={this.handleRatingChange}/><label htmlFor="star2" title="Poor"></label>
      <input type="radio" id="star1" name="rating" value="1" onChange={this.handleRatingChange}/><label htmlFor="star1" title="Very Poor"></label>
      </fieldset>

      <input type="submit" onClick={this.handlePost} value="Post"/>
      </form>
    );
  }
}

export default CommentForm;
