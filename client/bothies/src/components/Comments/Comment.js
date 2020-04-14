import React, { Component } from "react";

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h4> { this.props.children } </h4>
                <p> {this.props.rating}</p>
                <p> { this.props.author } </p>
                <hr/>
            </div>
        );
    }
}

export default Comment;
