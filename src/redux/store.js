import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactApi } from './Contacts/ContactsSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { authReducer } from 'redux/auth/auth-slice';
export const store = configureStore({
	reducer: {
		[contactApi.reducerPath]: contactApi.reducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
		contactApi.middleware,
	],
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
