import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import createRootReducer from './reducers'

export default () => {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    createRootReducer(),
    compose(
      applyMiddleware(
        sagaMiddleware),
      reduxDevTools
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}