import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';
import { selectPostById } from './postSlice';

export const SinglePage = () => {
  const { postId } = useParams();

  const post = useSelector(state => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.description}</p>{"\n"}

        <ReactionButtons post={post} />

        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  )
}