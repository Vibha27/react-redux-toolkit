import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
    {
        id:'0',
        title: "First Post",
        description: "This is first post description",
        userId: "1",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {thumbsUp: 2, hooray: 0, heart: 1, rocket: 0, eyes: 0}
    },
    {
        id:'1',
        title: "Second Post",
        description: "This is second post description",
        userId: "2",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {thumbsUp: 1, hooray: 1, heart: 0, rocket: 0, eyes: 0}
    }
];

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
            state.push(action.payload);
            },
            prepare: (title, description, userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        description,
                        userId,
                        reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
                    }
                }
            }
        },
        reactionAdded: (state,action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        postUpdated: (state, action) => {
            const { postId, title, description } = action.payload;
            const selectedPost = state.find(post => post.id === postId);

            if(selectedPost) {
                selectedPost.title = title;
                selectedPost.description = description;
            }
        }
    }
})

export const { addPost, postUpdated, reactionAdded } = postSlice.actions;

export const selectAllPosts = (state) => state.posts

export const selectPostById = (state, postId) => state.posts.find(post => post.id === postId)

export default postSlice.reducer
