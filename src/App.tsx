import React from 'react';
import './App.css';

// Subcomponents
import Layout from './Layout/Layout';

import Panel from './Panel/Panel';
import UserPosts from './UserPosts/UserPosts';

function App() {
  return (
    <Layout>
      <UserPosts />
      <Panel />
    </Layout>
  );
}

export default App;
