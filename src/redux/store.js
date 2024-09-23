import { configureStore } from '@reduxjs/toolkit'
import shoppingReducer from './shoppingSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
      key: 'root',
      storage,
}
const persistedReducer = persistReducer(persistConfig, shoppingReducer)

export const store = configureStore({
      reducer: {
            shopping: persistedReducer
      },
})

export const persistor = persistStore(store)
