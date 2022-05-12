import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	// reducers: {
	// 	update(state, action) {
	// 		state.token = action.payload + 1;
	// 	},
	// },
	extraReducers: {},
});

const persistConfig = {
	key: 'root',
	storage,
	// whitelist: [token],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
