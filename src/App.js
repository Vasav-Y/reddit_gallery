import React, { useState, useEffect } from 'react';

import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');
  useEffect(() => {
    fetch("https://www.reddit.com/r/pics.json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticles(data.data.children);
        });
      }
    )
  }, [subreddit]);

  return (
    <div className="App">
      <header>
        <p class="subreddit_input" > r/pics </p>
      </header>
      <h4 class="h4"><b><i>Hots</i></b></h4>
      <div className="articles">
        {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
      </div>
    </div>
  );
}

export default App;
