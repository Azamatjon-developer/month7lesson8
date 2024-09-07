import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/index.js'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewate) =>
    getDefaultMiddlewate().concat(api.middleware),
})
