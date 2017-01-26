import React from 'react';

export default props => {
  return (
    <div className="class-name">
      {props.loading && (
        <span>Loading ...</span>
      )}
      {props.posts && props.posts.map( (post, i) => {
        return <p key={i}>{post.title}</p>;
      })}
    </div>
  );
}
