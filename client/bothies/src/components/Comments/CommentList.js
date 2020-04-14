import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {


    render() {
        const commentNodes = this.props.comments.map(comment => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                    <br/>
                    <br/>
                    {comment.rating}/5
                </Comment>
            );
        });

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        );

    }
}

export default CommentList;
