import { Layout } from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsPage } from 'ViewPages/ContactsPage/ContactsPage';
import { HomePage } from 'ViewPages/HomePage/HomePage';
import { LoginPage } from 'ViewPages/LoginPage/LoginPage';
import { RegisterPage } from 'ViewPages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="contacts" element={<ContactsPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
			<Toaster />
		</>
	);
}

export default App;
