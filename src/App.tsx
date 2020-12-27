import React from 'react';
import './App.css';

// Subcomponents
import Layout from './Layout/Layout';

import UserPosts from './UserPosts/UserPosts';

function App() {
  return (
    <Layout>
      <UserPosts />
    </Layout>
  );
}

export default App;
