import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { postUpdated, selectPostById } from './postSlice';

export const EditPost = () => {
    const { postId } = useParams();
    // const id = postId;

    const post = useSelector(state => selectPostById(state, postId))
  
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setDescription(e.target.value)

    const onSavePostClicked = () => {
        console.log(title);
        if (title && description) {
          dispatch(postUpdated({ postId, title, description }))
          navigate(`/postList/${postId}`)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                type="text"
                id="postTitle"
                name="postTitle"
                placeholder="What's on your mind?"
                value={title}
                onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Description:</label>
                <textarea
                id="postContent"
                name="postContent"
                value={description}
                onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
    
        </div>
    );
}
