import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: (state,actions) => {
        state.value += 1
      },
      decremented: (state,actions) => {
        state.value -= 1
      }
    }
  })

export const { incremented, decremented } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})


store.subscribe(() => console.log(store.getState()))


store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(incremented())