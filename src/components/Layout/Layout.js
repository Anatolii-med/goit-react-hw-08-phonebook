import { Navigation } from 'components/Nav/nav';
import { LoginNavigation } from 'components/authNav/authNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export function Layout() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
	return (
		<>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <LoginNavigation />}

			<Outlet />
		</>
	);
}
