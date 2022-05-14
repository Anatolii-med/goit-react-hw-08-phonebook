import { Navigation } from 'components/Nav/nav';
import { LoginNavigation } from 'components/authNav/authNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
// import { Suspense } from 'react';
import { MenuBar, Content, Wrap } from './Layout.styled';

export function Layout() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
	return (
		<Wrap>
			<MenuBar>
				<>
					<Navigation />
				</>
				<>{isLoggedIn ? <UserMenu /> : <LoginNavigation />}</>
			</MenuBar>
			{/* <LoginNavigation /> */}
			{/* <UserMenu /> */}
			{/* <Suspense fallback={<h1>Loading...</h1>}> */}
			<Content>
				<Outlet />
			</Content>
			{/* </Suspense> */}
		</Wrap>
	);
}
