import React from 'react';

export default props => {
  return (
    <div className="class-name">
      {props.loading && (
        <span>Loading ...</span>
      )}
      {props.posts && props.posts
        .reduce( (posts, post, i) => {
          if (i >= props.count) {
            return posts;
          }
          posts.push(
            <p key={i}>{post.title}</p>
          );
          return posts;
        }, [])}
    </div>
  );
}
