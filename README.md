## Moon Tech Redux Toolkit Practice

### Redux Toolkit Setup : [help](https://redux-toolkit.js.org/tutorials/quick-start#usage-summary)

- npm install @reduxjs/toolkit react-redux

### store set up

- configureStore

### cartSlice

- createSlice
- export cartSlice.reducer
- export cartSlice.actions : addToCart , removeFromCart

### filterSlice set up

- createSlice
- export filterSlice.reducer
- export filterSlice.actions : toggle , toggleBrand

### axios set up

- structure :
- - utils > axios.config.js
- switch URL depending on .env.local:
- - production : productionServer
- - development+default : local server
- axios.create({ })
- - set baseURL property and export default

### async productsSlice set up

- createSlice
- export productsSlice.reducer
- productsAPI.js
- - axios.get("/product")
- createAsyncThunk [help](https://redux-toolkit.js.org/api/createAsyncThunk)
- - export createAsyncThunk function to dispatch
- - parameters
- - - actions name
- - - async callback function ( passes value when dispatch , thunkAPI)
- - - - return data after fetching
- extraReducers (builder)
- - builder.addCase()
- - - createAsyncFunction.pending , createAsyncFunction.fulfilled, createAsyncFunction.rejected
- - - callbackFunction(state,action)
- - - - actions: get data which return from createAsyncFunction
- - - - state: to manipulate state for each pending , fulfilled , rejected case

#### env.local

##### REACT_APP_ENVIRONMENT=DEVELOPMENT
