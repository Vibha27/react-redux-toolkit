import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { CounterComponent } from './features/counter/CounterComponent';
import { HomePage } from './features/HomePage';
import AddPostForm from './features/posts/AddPostForm';
import { EditPost } from './features/posts/EditPost';
import PostList from './features/posts/PostList';
import { SinglePage } from './features/posts/SinglePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterComponent />} />
        <Route path="/addPost" element={<AddPostForm />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
        <Route path="/postList" element={<PostList />} />
        <Route path="/postList/:postId" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
