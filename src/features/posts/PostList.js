import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { selectAllPosts } from './postSlice';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

const PostList = () => {
    const postLists = useSelector(selectAllPosts);
    console.log(postLists);
    const orderedPosts = postLists.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <div>
            <h3>Your Feeds</h3>
            {orderedPosts.map(post => {
                return <div key={post.id}>
                    <h4>{post.title}</h4>
                    <PostAuthor userId={post.userId}/>
                    <p>{post.description.substring(0,10)}...</p>
                    <TimeAgo timestamp={post.date} />
                    <ReactionButtons post={post} />
                    <Link to={`/postList/${post.id}`}>View Post</Link>
                </div>
            })}
        </div>
    );
}

export default PostList;