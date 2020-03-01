import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { FETCH_ARTICLES_TOP_START } from '../store/actions'

const TopNews = props => {
  const dispatch = useDispatch()
  const fetchTopHeadlines = useCallback(() => dispatch({ type: FETCH_ARTICLES_TOP_START }), [dispatch])

  useEffect(() => {
    fetchTopHeadlines()
  }, [fetchTopHeadlines])

  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      <h1 className="mb-5">Lastest News</h1>
      <ArticleList />
    </div>
  )
}

export default TopNews