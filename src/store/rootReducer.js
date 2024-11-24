import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import appReducer from '../redux/reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    appState: appReducer,
});

export default persistReducer(persistConfig, rootReducer);
