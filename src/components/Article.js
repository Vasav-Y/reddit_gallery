import React from 'react';

function Article(props) {
  let base_url = 'https://reddit.com';
  let item = props.article;
  let url = "http://reddit.com" + item.permalink;
  let resolutions = item.preview.images[0].resolutions;
  let preview = resolutions[resolutions.length - 1].url.replace(/amp;/g, '');

  return (
    <article>
      <a href={base_url + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
      </a>
      <div class="image">
        <figure>
          <a href={item.url} target="_blank" title="Go Full Resolution Image">
            <img src={preview} />
          </a>
        </figure>
      </div>
    </article>
  )
}

export default Article;