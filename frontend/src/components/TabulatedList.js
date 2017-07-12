import React from 'react'
import ArticleList from './ArticleList'

const TabulatedList = ({ articles, profileId, theme }) => {
  if (!articles) {
    return (<div>Loading...</div>);
  }

  return (
    <div className={`tabulatedList ${theme}`}>
      <p className="info">
        Profile ID: {profileId}, applying class "{theme}"
      </p>
      <ArticleList articles={articles} />
    </div>
  )
}

export default TabulatedList
