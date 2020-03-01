import React from 'react'
import moment from 'moment'

const Article = props => {
  const { article } = props

  return (
    <div className="card">
      <figure className="card-img-top">
        <img src={article.urlToImage} alt="article" />
      </figure>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-4 text-muted small">{article.author} from {article.source.name || ''}</h6>
        <p className="card-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to article</a>
      </div>
      <div className="card-footer text-muted">
        { moment(article.publishedAt).format('HH:mm on D MMM YYYY')}
      </div>
    </div>
  )
}

export default Article