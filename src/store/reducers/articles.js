import { FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAIL, FETCH_ARTICLES_TOP_START } from "../actions"

const initialState = {
  articles: [],
  isLoading: false,
  isErrors: null
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
    case FETCH_ARTICLES_TOP_START:
      return { ...state, isLoading: true }
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articles: action.data.articles, isLoading: false }
    case FETCH_ARTICLES_FAIL:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state
  }
}

export default articleReducer