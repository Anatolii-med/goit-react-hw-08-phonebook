import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/auth-operations';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isFetchingCurrentUser: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,

	extraReducers: {
		[authOperations.register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[authOperations.logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[authOperations.logOut.fulfilled](state, action) {
			state.user = initialState.user;
			state.token = initialState.token;
			state.isLoggedIn = initialState.isLoggedIn;
		},

		[authOperations.fetchCurrentUser.pending](state) {
			state.isFetchingCurrentUser = true;
		},

		[authOperations.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isFetchingCurrentUser = false;
		},
		[authOperations.fetchCurrentUser.rejected](state, action) {
			state.isFetchingCurrentUser = false;
		},
	},
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
