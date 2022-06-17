import { configureStore } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(ReduxLogger),
    reducer: persistedReducer
});

let persistor = persistStore(store);
export { store, persistor };
