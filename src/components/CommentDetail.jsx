import React from "react"

const CommentDetail = function (props) {
    console.log(props);
    return (
        <div className="comment">
            <a className="avatar" href="/" >
                <img alt="avatar" src={props.src} title="avatar"></img>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.date}
                    </span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;