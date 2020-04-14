// Temporary container until we can hook it up to the individual hike pages

import React, { Component } from "react";
import CommentList from "../components/Comments/CommentList";
import CommentForm from "../components/Comments/CommentForm";

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
              {
                id:1,
                author: "JB87",
                text:"Great Walk!",
                rating:5
              }
            ]
        }

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(submittedComment) {
        submittedComment.id = Date.now();

        const updatedComments = [...this.state.comments, submittedComment];
        this.setState( {
            comments: updatedComments
        });
    }

    render() {
        return (
            <div className="comment-box">
                <h2>Add Comment/Review</h2>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>

                <h2>Comments</h2>
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentBox;
