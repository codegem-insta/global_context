import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import UserPosts from './UserPosts/UserPosts';

function App() {
  return (
    <Layout>
      <UserPosts />
      <div>Panel</div>
    </Layout>
  );
}

export default App;
