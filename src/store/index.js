import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMonitor =  null
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
  )
)

sagaMiddleware.run(sagas)

export default store