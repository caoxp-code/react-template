import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { reducers } from './root.reducers'
export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV != 'production',
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  ;(module as any).hot.accept('./root.reducers', () => {
    const newReducer = require('./root.reducers')
    store.replaceReducer(newReducer)
  })
}
