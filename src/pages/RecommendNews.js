import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { FETCH_ARTICLES_START } from '../store/actions'

const RecommendNews = props => {
  const currentUser = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch()
  const fetchAllArticles = useCallback((params = {q: currentUser.keyword || 'apple'}) => dispatch({ type: FETCH_ARTICLES_START, params }), [dispatch, currentUser])

  useEffect(() => {
    fetchAllArticles()
  }, [fetchAllArticles])
  
  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      <h1 className="mb-5">Hand-picked news base on your curiosity</h1>
      <ArticleList />
    </div>
  )
}

export default RecommendNews