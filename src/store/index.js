import { persistStore } from 'redux-persist';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducers from './modules/rootReduces';
import rootSagas from './modules/rootSagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(
  persistReducers(rootReducers),
  applyMiddleware(...middlewares)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
