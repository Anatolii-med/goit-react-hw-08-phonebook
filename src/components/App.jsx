import { Layout } from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsPage } from 'ViewPages/ContactsPage/ContactsPage';
import { HomePage } from 'ViewPages/HomePage/HomePage';
import { LoginPage } from 'ViewPages/LoginPage/LoginPage';
import { RegisterPage } from 'ViewPages/RegisterPage/RegisterPage';

// import { lazy } from 'react';

// const AsyncPageLoad = componentName => {
// 	return lazy(() => {
// 		return import(`ViewPages/${componentName}/${componentName}`).then(
// 			module => {
// 				return { default: module[componentName] };
// 			}
// 		);
// 	});
// };

// const HomePage = AsyncPageLoad('HomePage');
// const ContactsPage = AsyncPageLoad('ContactsPage');
// const RegisterPage = AsyncPageLoad('RegisterPage');
// const LoginPage = AsyncPageLoad('LoginPage');

function App() {
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
