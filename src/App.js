import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsApp from './components/NewsApp';
import ArticleDetails from './components/ArticleDetails';
import Navbar from './components/Navbar';

function App() {
  const [category, setCategory] = useState("general")
  return (
    <Router>
      <Navbar setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<NewsApp category={category} />} />
        <Route path="/article/:id" element={<ArticleDetails category={category} />} />
      </Routes>
    </Router>
  );
}

export default App;


//const url = 'https://newsapi.org/v2/top-headlines?' +
// 'country=us&' + `category=${category}&` +
// 'apiKey=952da4498e3e448883429cd846ca31e5';