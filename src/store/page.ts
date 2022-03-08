import { createSlice } from '@reduxjs/toolkit'
export type PageStateInfo = {
  loading: boolean
}
const initialState: PageStateInfo = {
  loading: false,
}
const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    changeLoading: (state, actions) => {
      state.loading = actions.payload
    },
  },
})
export const reducer = pageSlice.reducer
