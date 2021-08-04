import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducers from "../redux/reducers/"; // where reducers is a object of reducers
import sagas from "../sagas";

const config = {
  timeout: 50000,
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  //whitelist: ["authReducer", "syncFailedReducer"],
  debug: true, //to get useful logging
  transforms: []
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
middleware.push(createLogger());

// if (__DEV__) {
//   middleware.push(createLogger());
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = persistReducer(config, rootReducers);

const enhancers = [composeEnhancers(applyMiddleware(...middleware))];
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  // console.log('Test', store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
