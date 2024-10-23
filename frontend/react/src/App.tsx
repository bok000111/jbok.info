import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Root from '@/routes/Root';
import Layout from '@/components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Root />
          </Layout>
        } />
      </Routes>
    </BrowserRouter >
  );
};

export default App;
