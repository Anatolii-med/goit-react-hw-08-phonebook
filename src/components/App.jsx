// import HomePage from 'ViewPages/HomePage/HomePage';
// import { LoginPage } from '../ViewPages/LoginPage/LoginPage';
// import { ContactsPage } from 'ViewPages/ContactsPage/ContactsPage';
// import RegisterPage from 'ViewPages/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { AppContainer } from './App.styled';

const HomePage = lazy(() => import('ViewPages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
	import('../ViewPages/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
	import('../ViewPages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../ViewPages/LoginPage/LoginPage'));

function App() {
	const dispatch = useDispatch();
	const isFetchingCurrentUser = useSelector(
		authSelectors.getIsFetchingCurrentUser
	);

	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser());
	}, [dispatch]);

	return (
		!isFetchingCurrentUser && (
			<AppContainer>
				<Layout />
				<Suspense fallback={<p>***********************</p>}>
					<Routes>
						<Route path="/">
							<Route index element={<HomePage />} />

							<Route
								index
								element={
									<PublicRoute navigateTo={'/'}>
										<HomePage />
									</PublicRoute>
								}
							/>

							<Route
								path="contacts"
								element={
									<PrivateRoute navigateTo="/login">
										<ContactsPage />
									</PrivateRoute>
								}
							/>
							<Route
								path="register"
								element={
									<PublicRoute
										navigateTo="/contacts"
										restricted
									>
										<RegisterPage />
									</PublicRoute>
								}
							/>
							<Route
								path="login"
								element={
									<PublicRoute
										navigateTo="/contacts"
										restricted
									>
										<LoginPage />
									</PublicRoute>
								}
							/>

							<Route path="*" element={<Navigate to="/" />} />
						</Route>
					</Routes>
				</Suspense>
				<Toaster />
			</AppContainer>
		)
	);
}

export default App;
