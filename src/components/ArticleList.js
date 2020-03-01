import React from 'react'
import { useSelector } from 'react-redux'
import Article from './Article'

const ArticleList = props => {
  const articles = useSelector(state => state.articles.articles)
  const isLoading = useSelector(state => state.articles.isLoading)
  const isError = useSelector(state => state.articles.isError)

  if (isLoading) return <p>Loading ...</p>
  if (isError) return <p>Something wrong happened, please try again later</p>
  return (
    <div className="row">
      {articles.map(article => (
        <div key={article.title} className="col-sm-12 col-md-6 col-lg-4">
          <Article article={article} />
        </div>
      ))}
    </div>
  )
}

export default ArticleList