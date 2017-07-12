import React from 'react'
import Article from './Article'

const ArticleList = ({ articles }) => {
  if (!articles) {
    return (<div>Loading...</div>);
  }

  return (
    <div>
      {articles.map(article => (
        <Article key={article.href} {...article} />
      ))}
    </div>
  )
}

export default ArticleList
