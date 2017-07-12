import React from 'react'

const Article = ({ href, summary, title }) => {
  return (
    <li className="article">
      <a href={href} className="articleLink">
        <h4>{title}</h4>
      </a>
      <a href={href} className="articleLink">
        <p>{summary}</p>
      </a>
    </li>
  )
}

export default Article
