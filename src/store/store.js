import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../store/rootReducer';
import rootSaga from '../store/rootSaga';

// Persist Config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['appState'], // Add reducers you want to persist
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Store with Middleware
const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);

// Persistor
const persistor = persistStore(store);

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

export { store, persistor };

export const forcePersistFlush = () => {
    persistor.flush().then(() => {
        console.log('State persisted successfully');
    }).catch(err => {
        console.error('Error while persisting state:', err);
    });
};
