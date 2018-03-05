import React, { Component } from 'react';
import { Link } from 'react-router';

class Photo extends Component {
  render() {
    const { post, i, comments } = this.props;

    return (
      <div className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            {post.caption}
          </Link>
        </div>
      </div>
    )
  }
}

export default Photo;
