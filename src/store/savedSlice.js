import { createSlice } from '@reduxjs/toolkit'

const load = () => {
  try {
    return JSON.parse(localStorage.getItem('saved')) || []
  } catch {
    return []
  }
}

const slice = createSlice({
  name: 'saved',
  initialState: { items: load() },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.find(i => i.code === action.payload.code)) {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.code !== action.payload)
    }
  }
})

export const { addItem, removeItem } = slice.actions
export default slice.reducer