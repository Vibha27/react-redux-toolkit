import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from './postSlice';


const AddPostForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState("");

    const dispatch = useDispatch();

    // const postsList = useSelector(selectAllPosts);
    // const postsLength = postsList.length;

    const usersList = useSelector(state => state.users);

    const onPostSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(title, description, userId))
    }

    const onUserChange = (e) => {
        setUserId(e.target.value);
    }

    const usersOptions = usersList.map(data => (
        <option key={data.id} value={data.id}>{data.name}</option>
    ))
    

    return (
        <div>
            <h2>Add Your Post</h2>
            <form onSubmit={onPostSubmit}>
                <select value={userId} onChange={onUserChange}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>{"\n"}
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>{"\n"}
                <input type="submit" value="Post" />
            </form>
        </div>
    );
}

export default AddPostForm;